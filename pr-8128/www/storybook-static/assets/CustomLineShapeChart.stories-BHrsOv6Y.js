import{R as t}from"./iframe-DwhrPqQ2.js";import{R as D,l as p}from"./zIndexSlice-CpWq1zjb.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D6wKxQAg.js";import{C as M}from"./CartesianGrid-Bv0fHYIP.js";import{X as $}from"./XAxis-DalFir1z.js";import{Y as I}from"./YAxis-CQHM2D8-.js";import{L as O}from"./Legend-BQf2vWfr.js";import{T as W}from"./Tooltip-BfkiQp9S.js";import{L as f}from"./Line-CzQiNu3A.js";import{C as X}from"./Curve-BhXF6Rtc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DjT--ccN.js";import"./throttle-DfnnAIvE.js";import"./index-kf961mzr.js";import"./index-CEmaTsjJ.js";import"./RechartsWrapper-DwGtUcHg.js";import"./axisSelectors-Co6y6k23.js";import"./polarAxisSelectors-BuB4o-cj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C0de4oSn.js";import"./index-CsaEib3L.js";import"./index-BEv8RXE2.js";import"./renderedTicksSlice-6PXLxRIe.js";import"./index-Y2LMv9l3.js";import"./CartesianChart-D8j3jRJC.js";import"./ZIndexPortal-DZJ5tH-i.js";import"./CategoricalChart-j0pVaHBn.js";import"./CartesianAxis-ClEu4A1x.js";import"./Layer-vnYdlnEA.js";import"./Text-C74hS0lU.js";import"./DOMUtils-BcceySrU.js";import"./pageBackground-BJp9wwMp.js";import"./ZIndexLayer-BSdSgNTE.js";import"./Label-CPQgWsRx.js";import"./types-CR-LymQu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-Dmspdt-4.js";import"./fillDefinitions-Dhc8KNfB.js";import"./Symbols-CvLu8AuU.js";import"./symbol-4bH2ZeXc.js";import"./path-DyVhHtw_.js";import"./useElementOffset--RCirzvW.js";import"./uniqBy-C-Hwd9w4.js";import"./iteratee-CMbc4V8B.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Cr5bB81Q.js";import"./Cross-67wVy07F.js";import"./Rectangle-C3hl6UlM.js";import"./util-Dxo8gN5i.js";import"./Sector-CCcig7Va.js";import"./LabelList-D6fyXhX7.js";import"./ActivePoints-hySilWiE.js";import"./Dot-PaVtx7_L.js";import"./activeStyles-DZGQwj2F.js";import"./dataEntryStyles-DWHZ8H87.js";import"./ErrorBarContext-ByBJW2kl.js";import"./SetGraphicalItem-Dt6F2mBE.js";import"./getRadiusAndStrokeWidthFromDot-VJH7k67x.js";import"./ActiveShapeUtils-CDAywyE9.js";import"./useEffectiveDataKey-D3ULyXZ6.js";import"./step-BswNGXoJ.js";const Ut={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Vt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Vt as __namedExportsOrder,Ut as default};
