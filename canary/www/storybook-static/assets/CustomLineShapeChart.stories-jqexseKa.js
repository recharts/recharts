import{R as t}from"./iframe-r3x3_yf4.js";import{R as D,l as p}from"./zIndexSlice-NMb2vrpT.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Bw5WcD6h.js";import{C as M}from"./CartesianGrid-C_6RJk7q.js";import{X as $}from"./XAxis-CR4ARCer.js";import{Y as I}from"./YAxis-DqWMDxyr.js";import{L as O}from"./Legend-B6b6ZtFX.js";import{T as W}from"./Tooltip-6IxPy6gq.js";import{L as f}from"./Line-DTsRfFau.js";import{C as X}from"./Curve-D6X3Km74.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D1EJxC7c.js";import"./throttle-8hacI6eE.js";import"./index-DCzxVT24.js";import"./index-BmCC5OWu.js";import"./RechartsWrapper-_voIQt-f.js";import"./axisSelectors-vmwSvweQ.js";import"./polarAxisSelectors-jpdu1VNr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dyg5lSMz.js";import"./index-CXlPhSWr.js";import"./index-Br7b2-_x.js";import"./renderedTicksSlice-Bwv1Ycq-.js";import"./index-XR02wMNZ.js";import"./fillDefinitions-6lmPyfb7.js";import"./CartesianChart-Cu7l70fA.js";import"./chartDataContext-ZH5Padeo.js";import"./CategoricalChart-B9Dtz71g.js";import"./CartesianAxis-D0GcJHV6.js";import"./Layer-Bgw_1AH_.js";import"./Text-BJw7R8d_.js";import"./ZIndexLayer-U0OKF9Zk.js";import"./Label-C--_kXjw.js";import"./types-C8JZdNIX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C3Jeo7wF.js";import"./symbol-BJuLtVcg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bty5qG4M.js";import"./uniqBy-B7Rcd-R6.js";import"./iteratee-Bw3PE4p8.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-EE0FjekO.js";import"./Cross-D-GxHVeh.js";import"./Rectangle-BHZ7OtoD.js";import"./util-Dxo8gN5i.js";import"./Sector-C2_QhYTT.js";import"./dataEntryStyles-CPsjZ3pD.js";import"./ActivePoints-Cjc4G9GK.js";import"./Dot-CLqyjgQR.js";import"./activeStyles-TIYUw2JD.js";import"./ErrorBarContext-U5wRur_B.js";import"./SetGraphicalItem-C13buv2r.js";import"./getRadiusAndStrokeWidthFromDot-Bt8N-NmA.js";import"./ActiveShapeUtils-Dpt4d3xT.js";import"./useEffectiveDataKey-CUQD41kZ.js";import"./step-iF2C6urg.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
