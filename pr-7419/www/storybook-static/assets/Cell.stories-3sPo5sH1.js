import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{a,o}from"./tooltipContext-ZpQG7-xD.js";import{i as s,n as c,r as l,t as u}from"./PieChart-CJKiHe9W.js";import{r as d,t as f}from"./Page-DUsfWi7y.js";import{n as p,t as m}from"./utils-vqcWnakT.js";var h;function g(){return(g=t((()=>{h={fill:{description:`The fill color.`,control:{type:`color`},table:{type:{summary:`string`},category:`Style`}},stroke:{description:`The stroke color.`,control:{type:`color`},table:{type:{summary:`string`},category:`Style`}}}})))()}var _,v,y,b,x;function S(){return(S=t((()=>{_=e(n()),o(),s(),c(),i(),p(),f(),g(),v={argTypes:h,component:a},y=[`#0088FE`,`#00C49F`,`#FFBB28`,`#FF8042`,`red`,`pink`,`url(#pattern-checkers)`],b={render:e=>_.createElement(r,{width:`100%`,height:400},_.createElement(u,null,_.createElement(`defs`,null,_.createElement(`pattern`,{id:`pattern-checkers`,x:`0`,y:`0`,width:`10`,height:`10`,patternUnits:`userSpaceOnUse`},_.createElement(`rect`,{x:`0`,width:`5`,height:`5`,y:`0`}),_.createElement(`rect`,{x:`100`,width:`5`,height:`5`,y:`100`}))),_.createElement(l,{data:d,dataKey:`uv`,label:!0},d.map((t,n)=>_.createElement(a,{key:`cell-pie-${t.pv}-${t.uv}`,fill:y[n],...e}))))),args:m(h)},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const surfaceDimension = 400;
    return <ResponsiveContainer width="100%" height={surfaceDimension}>
        <PieChart>
          <defs>
            <pattern id="pattern-checkers" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect x="0" width="5" height="5" y="0" />
              <rect x="100" width="5" height="5" y="100" />
            </pattern>
          </defs>
          <Pie data={pageData} dataKey="uv" label>
            {pageData.map((entry, index) => <Cell key={\`cell-pie-\${entry.pv}-\${entry.uv}\`} fill={COLORS[index]} {...args} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(CellArgs)
}`,...b.parameters?.docs?.source}}},x=[`API`]})))()}S();export{b as API,x as __namedExportsOrder,v as default};