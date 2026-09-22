import{R as t}from"./iframe-V0uWMpm8.js";import{a as p}from"./isWellBehavedNumber-MEUC6Th_.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-wtBmxsSQ.js";import{R as T}from"./zIndexSlice-DUX4TIf3.js";import{C as M}from"./CartesianGrid-BpsJLa0o.js";import{X as $}from"./XAxis-DRAr1kyY.js";import{Y as I}from"./YAxis-t5K6SsBB.js";import{L as O}from"./Legend-DJJvkBf-.js";import{T as W}from"./Tooltip-C9qGKE0N.js";import{L as C}from"./Line-BEwRsXkJ.js";import{C as X}from"./Curve-Dbv7OhLZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-aKGdeQK0.js";import"./RechartsWrapper-CCLf8n2o.js";import"./axisSelectors-SQHKz4ZO.js";import"./throttle-CmD5MtuF.js";import"./index-D_MUhraT.js";import"./index-DPqbft9D.js";import"./d3-scale-BJHPeQPf.js";import"./index-kjeSN6uv.js";import"./index-3fJcv3y4.js";import"./renderedTicksSlice-DZhKT_zE.js";import"./index-SLBi9NdX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DXwmQtN1.js";import"./chartDataContext-CQKtni77.js";import"./CategoricalChart-zmhxTVhd.js";import"./CartesianAxis-DtLaMWrT.js";import"./Layer--mIrdw0x.js";import"./Text-CDsr0dRv.js";import"./DOMUtils-BW4dN_KI.js";import"./useId--nrsw05H.js";import"./useBackwardsCompatibleTheme-CEplzgd4.js";import"./Label-2hyP-tsc.js";import"./ZIndexLayer-DivbHHVg.js";import"./types-CDLzu-PR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ERS327yO.js";import"./symbol-iVBsO0Fb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CCBbejER.js";import"./uniqBy-Bb8a2JnS.js";import"./iteratee-n7wxeW7K.js";import"./useAnimationId-Dtpy8skx.js";import"./Cross-BQw699xs.js";import"./Rectangle-R42X70zL.js";import"./util-Dxo8gN5i.js";import"./Sector-DyCbC2Cb.js";import"./AnimatedItems-BOhMHwpv.js";import"./ActivePoints-BYb_Gd1q.js";import"./Dot-BU72Jr9Q.js";import"./RegisterGraphicalItemId-XrZ7XOK-.js";import"./ErrorBarContext-De7ujaEj.js";import"./GraphicalItemClipPath-B0v9QHui.js";import"./SetGraphicalItem-DNGP3yw2.js";import"./getRadiusAndStrokeWidthFromDot-Bet3JchB.js";import"./ActiveShapeUtils-CaWetUUl.js";import"./useGraphicalItemIdentity-BcaMYi1E.js";import"./step-Z9qPbZSL.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
