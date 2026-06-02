import{c as t}from"./iframe-Bhg7B6nu.js";import{a as p}from"./isWellBehavedNumber-CRt7foTE.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-0eOMbApz.js";import{g as M}from"./zIndexSlice-CpfnlaY3.js";import{C as R}from"./CartesianGrid-2VeWgHga.js";import{X as $}from"./XAxis-BaFC3En6.js";import{Y as I}from"./YAxis-CDnoamqb.js";import{L as O}from"./Legend-BV6bfmU5.js";import{T as W}from"./Tooltip-uYtmtlnI.js";import{L as C}from"./Line-DnXTv09L.js";import{C as X}from"./Curve-CepT2fcB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bdfg8b7E.js";import"./resolveDefaultProps-DYGylzt5.js";import"./RechartsWrapper-BO-9qVe8.js";import"./index-hZ-hNf3X.js";import"./index-LweJEeHr.js";import"./index-fTPSImHI.js";import"./index-BeLXdiSX.js";import"./immer-DB_z4hP2.js";import"./renderedTicksSlice-BWF9zmW-.js";import"./axisSelectors-CdfzhIk0.js";import"./d3-scale-CZa5b7JS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_99cbzZ.js";import"./chartDataContext-CTHxBaCW.js";import"./CategoricalChart-Dr5hcJGP.js";import"./CartesianAxis-D1bYab0n.js";import"./Layer-CWtBt3tO.js";import"./Text-B3Epq4Nr.js";import"./DOMUtils-umXRQPav.js";import"./Label-g9fCGbFu.js";import"./ZIndexLayer-BLUBt3jh.js";import"./types-CBsC6Zml.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D0IR3Ewb.js";import"./symbol-DtDt1tne.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ByWie8Pg.js";import"./uniqBy-DE9J9zXb.js";import"./iteratee-_s1w9D9m.js";import"./useAnimationId-CDEhZOSy.js";import"./Cross-D5JF58Wa.js";import"./Rectangle-JbDXy-um.js";import"./Sector-C5Td0knX.js";import"./ReactUtils-BhSP1QaD.js";import"./ActivePoints-DopF7LMV.js";import"./Dot-DS4twGmw.js";import"./RegisterGraphicalItemId-BzH-PWzG.js";import"./ErrorBarContext-D0cT0mEH.js";import"./GraphicalItemClipPath-BljaU2rV.js";import"./SetGraphicalItem-DpMnWL3z.js";import"./getRadiusAndStrokeWidthFromDot-CR_o6rYy.js";import"./ActiveShapeUtils-CZOt3Dfh.js";import"./step-B9W3HLIp.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(M,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(R,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Bt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Bt as __namedExportsOrder,Gt as default};
