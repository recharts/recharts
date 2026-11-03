import{R as t}from"./iframe-BC6iQeUr.js";import{R as D,l as p}from"./zIndexSlice-DwuZ2Ow7.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DkqLAUlw.js";import{C as M}from"./CartesianGrid-B0rZ1QoX.js";import{X as $}from"./XAxis-8wiG-IT7.js";import{Y as I}from"./YAxis-B2Rm1v3y.js";import{L as O}from"./Legend-Defdsh0z.js";import{T as W}from"./Tooltip-B6SSATs-.js";import{L as f}from"./Line-yiqo5pDE.js";import{C as X}from"./Curve-BvPWva0Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIZ3ps7e.js";import"./throttle-MiaNLFmz.js";import"./index-D3yqD8af.js";import"./index-CYTdWqrV.js";import"./RechartsWrapper-DHIomU5i.js";import"./axisSelectors-Bd1LmNHc.js";import"./polarAxisSelectors-mzCge1J3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Daj11TvY.js";import"./index-D34_hmzU.js";import"./index-DraKlH0s.js";import"./renderedTicksSlice-BGFaFbR8.js";import"./index-B7dOZ4Mr.js";import"./fillDefinitions-B6DkeJW_.js";import"./CartesianChart-BLRdoMZg.js";import"./ZIndexPortal-jmLjufPW.js";import"./CategoricalChart-9j6tsrvq.js";import"./CartesianAxis-eBXlpwXS.js";import"./Layer-Cuu8DjLO.js";import"./Text-fEDBC_0o.js";import"./DOMUtils-B8TR7nYh.js";import"./ZIndexLayer-DCc79hxk.js";import"./Label-BCMvROnb.js";import"./types-Dwpv4Yth.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DBa5o5yK.js";import"./symbol-BvmQmKKh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-k-LXptTs.js";import"./uniqBy-CV8NSfie.js";import"./iteratee-Q-eBNyZk.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Cw69Pi1k.js";import"./Cross-DSJzht9z.js";import"./Rectangle-CNYq4UQO.js";import"./util-Dxo8gN5i.js";import"./Sector-B7q2mBx3.js";import"./LabelList-BFjn3eEm.js";import"./ActivePoints-JuUDd9nh.js";import"./Dot-DyLV3zJ_.js";import"./activeStyles-DfgAGK4N.js";import"./dataEntryStyles-BFig0g5r.js";import"./ErrorBarContext-uhSKqamS.js";import"./SetGraphicalItem-CqMMnBeb.js";import"./getRadiusAndStrokeWidthFromDot-DQip5ZIl.js";import"./ActiveShapeUtils-DxbJ9fQI.js";import"./useEffectiveDataKey-Bk74mtUJ.js";import"./step-DPNt-X3R.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
