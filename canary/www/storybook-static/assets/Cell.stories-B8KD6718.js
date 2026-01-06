import{e}from"./iframe-CKmpfOpL.js";import{G as c}from"./Styles-CVZG1vZQ.js";import{bG as l}from"./EventHandlers-CQuYL328.js";import{g as n}from"./utils-ePvtT4un.js";import{C as p}from"./tooltipContext-dPsf86pg.js";import{R as g}from"./arrayEqualityCheck-CGTamc7H.js";import{P as h,a as u}from"./PieChart-C5OLVEet.js";import{R as y}from"./RechartsHookInspector-DZtkbE0Z.js";import{p as a}from"./Page-Cj8EiXz7.js";const f={argTypes:{...c,...l,dangerouslySetInnerHTML:{table:{category:"Deprecated",disable:!0}}},component:p},C=["#0088FE","#00C49F","#FFBB28","#FF8042","red","pink","url(#pattern-checkers)"],t={render:m=>e.createElement(g,{width:"100%",height:400},e.createElement(h,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-checkers",x:"0",y:"0",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("rect",{x:"0",width:"5",height:"5",y:"0"}),e.createElement("rect",{x:"100",width:"5",height:"5",y:"100"}))),e.createElement(u,{data:a,dataKey:"uv",label:!0},a.map((r,d)=>e.createElement(p,{key:`cell-pie-${r.pv}-${r.uv}`,fill:C[d],...m}))),e.createElement(y,null))),args:{...n(c),...n(l)}};var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralStyle),
    ...getStoryArgsFromArgsTypesObject(EventHandlers)
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const S=["API"],w=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{t as A,w as C};
