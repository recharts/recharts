import{c as t}from"./iframe-UCAhYs-z.js";import{a as p}from"./isWellBehavedNumber-km_cSMyX.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-ShSbRf4p.js";import{g as M}from"./zIndexSlice-D1yLUW4N.js";import{C as R}from"./CartesianGrid-CXR_8IxH.js";import{X as $}from"./XAxis-DQ_rFapE.js";import{Y as I}from"./YAxis-COo7eY63.js";import{L as O}from"./Legend-CS02EQFH.js";import{T as W}from"./Tooltip-B_bJQRGz.js";import{L as C}from"./Line-jctQMIuW.js";import{C as X}from"./Curve-DOjbLHoQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-_XX617w0.js";import"./resolveDefaultProps-x5qwSX1Y.js";import"./RechartsWrapper-DH9U6NxN.js";import"./index-CWyZ4H7B.js";import"./index-CgqmNVZ9.js";import"./index-DNUUkfMj.js";import"./index-DUfS7S-b.js";import"./immer-C7lWlBZP.js";import"./renderedTicksSlice-c5635lKm.js";import"./axisSelectors-DDRfemS2.js";import"./d3-scale-4iD7H2_D.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-W_64lWDO.js";import"./chartDataContext-tDfcFOTc.js";import"./CategoricalChart-D1LSz5Gs.js";import"./CartesianAxis-UsQkFlnQ.js";import"./Layer-BbZFEpf4.js";import"./Text-Rw6qQ1RF.js";import"./DOMUtils-BWCSYHt1.js";import"./Label-CtGR-die.js";import"./ZIndexLayer-CEmXwARt.js";import"./types-tyluCCo2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Dq91fqfs.js";import"./symbol-C_PlBh2T.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DDgeNPdG.js";import"./uniqBy-BLPksq8r.js";import"./iteratee-Djf5ohSS.js";import"./useAnimationId-BjOATGeC.js";import"./Cross-CeE_DgSf.js";import"./Rectangle-_bYQmpgX.js";import"./Sector-CzBj4H8e.js";import"./ReactUtils-CzulCaS-.js";import"./ActivePoints-DwgVtAw6.js";import"./Dot-Cu_IjLEt.js";import"./RegisterGraphicalItemId-ByRoWgeN.js";import"./ErrorBarContext-Cvfv4OR0.js";import"./GraphicalItemClipPath-C-wdvxqO.js";import"./SetGraphicalItem-X5GoC_bE.js";import"./getRadiusAndStrokeWidthFromDot-BL_cRC7m.js";import"./ActiveShapeUtils-BWM9wxaW.js";import"./step-BCk2IvEt.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(M,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(R,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
