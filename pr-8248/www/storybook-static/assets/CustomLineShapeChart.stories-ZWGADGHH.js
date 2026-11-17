import{R as t}from"./iframe-DQIHw-Vj.js";import{R as D,l as p}from"./zIndexSlice-DLnqMvRR.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D2R6omtm.js";import{C as M}from"./CartesianGrid-DAgIamEO.js";import{X as $}from"./XAxis-C1j7r1zg.js";import{Y as I}from"./YAxis-BRNNX1VG.js";import{L as O}from"./Legend-CK1IssTU.js";import{T as W}from"./Tooltip-hF8WqyNy.js";import{L as f}from"./Line-CwKp4y3S.js";import{C as X}from"./Curve-BGOWFPUa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DCDPXacx.js";import"./throttle-CsL6-oT8.js";import"./index-ddMf2qZl.js";import"./index-DvzJj3QK.js";import"./RechartsWrapper-BOwBRf5q.js";import"./axisSelectors-BOWof0F_.js";import"./polarAxisSelectors-CO8YfrX5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D3QDia2a.js";import"./index-CAKt4SRE.js";import"./index-ej37J0iC.js";import"./renderedTicksSlice-DWNRUwtc.js";import"./index-DdSRFntK.js";import"./fillDefinitions-T89P4CC8.js";import"./CartesianChart-e9rrIYqD.js";import"./chartDataContext-D7ij0_Rh.js";import"./CategoricalChart-DgxyBa1d.js";import"./CartesianAxis-uR_V8Oxl.js";import"./Layer-Dtg1l4X7.js";import"./Text-UFCPlRdh.js";import"./ZIndexLayer-cKbXtIsu.js";import"./Label-CDOIzumT.js";import"./types-DC02XBeR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Derc8Zbt.js";import"./symbol-DHOCB5wG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-UoXHul.js";import"./uniqBy-DLWeu4D6.js";import"./iteratee-BZDFIkpf.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BGqCxB5a.js";import"./Cross-DpX9ppW_.js";import"./Rectangle-Bd8I5Mu8.js";import"./util-Dxo8gN5i.js";import"./Sector-BQCU8Weg.js";import"./getRadiusAndStrokeWidthFromDot-BtNwq4SW.js";import"./dataEntryStyles-CRT7gJOj.js";import"./ActivePoints-fySHDRUR.js";import"./Dot-so438WjJ.js";import"./activeStyles-DlG12Hxm.js";import"./ErrorBarContext-DeOd0WHi.js";import"./SetGraphicalItem-xxOWq2oE.js";import"./ActiveShapeUtils-sNC7IbT4.js";import"./useEffectiveDataKey-DXNQs5X4.js";import"./step-WCAmzMpM.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
