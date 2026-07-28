import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{E as r,It as i,Vn as a,t as o,vt as s}from"./iframe-BiMB5Acc.js";import{t as c}from"./data-J2vpPkF6.js";import{r as l}from"./Page-C0w_0_Yr.js";import{n as u,t as d}from"./utils-4uF5A2JM.js";var f,p=e((()=>{f={fill:{description:`The fill color.`,control:{type:`color`},table:{type:{summary:`string`},category:`Style`}},stroke:{description:`The stroke color.`,control:{type:`color`},table:{type:{summary:`string`},category:`Style`}}}})),m,h,g,_,v;e((()=>{m=t(n()),o(),u(),c(),p(),h={argTypes:f,component:i},g=[`#0088FE`,`#00C49F`,`#FFBB28`,`#FF8042`,`red`,`pink`,`url(#pattern-checkers)`],_={render:e=>m.createElement(a,{width:`100%`,height:400},m.createElement(r,null,m.createElement(`defs`,null,m.createElement(`pattern`,{id:`pattern-checkers`,x:`0`,y:`0`,width:`10`,height:`10`,patternUnits:`userSpaceOnUse`},m.createElement(`rect`,{x:`0`,width:`5`,height:`5`,y:`0`}),m.createElement(`rect`,{x:`100`,width:`5`,height:`5`,y:`100`}))),m.createElement(s,{data:l,dataKey:`uv`,label:!0},l.map((t,n)=>m.createElement(i,{key:`cell-pie-${t.pv}-${t.uv}`,fill:g[n],...e}))))),args:d(f)},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`API`]}))();export{_ as API,v as __namedExportsOrder,h as default};