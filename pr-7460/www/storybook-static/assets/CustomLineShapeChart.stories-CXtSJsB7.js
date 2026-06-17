import{R as t}from"./iframe-DGhU-a9T.js";import{a as p}from"./isWellBehavedNumber-CmPQeXr3.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D7KKlNBW.js";import{R as T}from"./zIndexSlice-D4C6hgdT.js";import{C as M}from"./CartesianGrid-C3Up4h_c.js";import{X as $}from"./XAxis-BniO9eps.js";import{Y as I}from"./YAxis-BZIvedAi.js";import{L as O}from"./Legend-BRE1EjLl.js";import{T as W}from"./Tooltip-CDB_Fk5c.js";import{L as C}from"./Line-ivCSXdEf.js";import{C as X}from"./Curve-D1MUxqb9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BovgKQJV.js";import"./resolveDefaultProps-Dbt_ZrM5.js";import"./RechartsWrapper-DbVRBKBT.js";import"./index-B_yATEtm.js";import"./index-DCbVvyOU.js";import"./index-Cst7TkYL.js";import"./index-DSZNwJZV.js";import"./immer-6aMp-_7U.js";import"./renderedTicksSlice-DlUNX-2S.js";import"./axisSelectors-B2LpzdTT.js";import"./d3-scale-CGHFSatL.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rdohZj9d.js";import"./chartDataContext-D0QBQcjy.js";import"./CategoricalChart-CgcUCFFA.js";import"./CartesianAxis-Cncjk8wz.js";import"./Layer-Dq7d9_uV.js";import"./Text-BWhw0wXD.js";import"./DOMUtils-CZpE5MKQ.js";import"./Label-Cn2enGhV.js";import"./ZIndexLayer-D2dadpNA.js";import"./types-DBzeQvsP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CjwVZBtH.js";import"./symbol-H1Rke99i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-F-eAusQk.js";import"./uniqBy-61b_bX-x.js";import"./iteratee-IjYl2ZNO.js";import"./useAnimationId-whgPLHvU.js";import"./Cross-Bt7osVPs.js";import"./Rectangle-BQMmoLkW.js";import"./Sector-Cn8xNtXL.js";import"./AnimatedItems-tx7FJlw3.js";import"./ActivePoints-DRG6SQTE.js";import"./Dot-ueeTOKda.js";import"./RegisterGraphicalItemId-7Cg8xoFx.js";import"./ErrorBarContext-D0SNCxES.js";import"./GraphicalItemClipPath-BG_0y6FZ.js";import"./SetGraphicalItem--dLvTOsx.js";import"./getRadiusAndStrokeWidthFromDot-Web9rp4C.js";import"./ActiveShapeUtils-FGDrwnsX.js";import"./step-LyYYLf4o.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
