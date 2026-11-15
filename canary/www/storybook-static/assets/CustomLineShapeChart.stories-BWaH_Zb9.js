import{R as t}from"./iframe-CvMP9Fqo.js";import{R as D,l as p}from"./zIndexSlice-B5trHRCj.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Cxl6tyNx.js";import{C as M}from"./CartesianGrid-BHqJEvj2.js";import{X as $}from"./XAxis-BVBOoebg.js";import{Y as I}from"./YAxis-tiTGIdx3.js";import{L as O}from"./Legend-DlTvp0v7.js";import{T as W}from"./Tooltip-B7ps6QuS.js";import{L as f}from"./Line-BbvHMrnh.js";import{C as X}from"./Curve-D_Wyck_t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BGEDHRJM.js";import"./throttle-MhOaKDgE.js";import"./index-D9jYUR_d.js";import"./index-BZUcM53P.js";import"./RechartsWrapper-CzGrl1eT.js";import"./axisSelectors-B3ymYEcm.js";import"./polarAxisSelectors-6vaNx2fR.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-b8kDtzlH.js";import"./index-CDgZ4Loc.js";import"./index-B6lplofW.js";import"./renderedTicksSlice-DkA6Ce2h.js";import"./index-LdeImoL7.js";import"./fillDefinitions-DQU_H3eF.js";import"./CartesianChart-CrVsIyiN.js";import"./chartDataContext-DgCWmyll.js";import"./CategoricalChart-Bvay8eab.js";import"./CartesianAxis-BofYDveF.js";import"./Layer-CKCTZlK6.js";import"./Text-B1VQrHkc.js";import"./ZIndexLayer-CYiENEwf.js";import"./Label-BXQPTxU_.js";import"./types-CEx7Mrjp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C-TD2pNc.js";import"./symbol-DH04N6rB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dzn1lI93.js";import"./uniqBy-CNOEx6rm.js";import"./iteratee-CxBX7Jt6.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DS6RlguF.js";import"./Cross-BdV4rx2s.js";import"./Rectangle-DCriiKhl.js";import"./util-Dxo8gN5i.js";import"./Sector-C8zA7xP5.js";import"./dataEntryStyles-D8XHfMQr.js";import"./ActivePoints-Dzw5hEuH.js";import"./Dot-RMR8pxKN.js";import"./activeStyles-iNSBQg7J.js";import"./ErrorBarContext-BNZINJYG.js";import"./SetGraphicalItem-XLvPTSfC.js";import"./getRadiusAndStrokeWidthFromDot-CtOVRdjN.js";import"./ActiveShapeUtils-8hEQ0x22.js";import"./useEffectiveDataKey-BdItYSIh.js";import"./step-TJxgmP_3.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
