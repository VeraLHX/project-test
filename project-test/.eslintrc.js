export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        'prettier/prettier': [
            // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则无提示
            'error',
            {
              // 不要分号
              semi: false,
              // 设置单引号
              singleQuote: true,
              // 设置换行长度
              printWidth: 160
            }
          ]
    }
};
