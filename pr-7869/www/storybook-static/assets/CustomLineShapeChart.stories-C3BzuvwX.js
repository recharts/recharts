import{R as t}from"./iframe-w_s9Pd89.js";import{a as p}from"./isWellBehavedNumber-Dd6bWbIs.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-QsNOj_tf.js";import{R as T}from"./zIndexSlice-it-eJu8g.js";import{C as M}from"./CartesianGrid-LBYnT_h9.js";import{X as $}from"./XAxis-vfiIl3GE.js";import{Y as I}from"./YAxis-CCoq1LN0.js";import{L as O}from"./Legend-DhdJ6L8r.js";import{T as W}from"./Tooltip-BmhbtTd1.js";import{L as C}from"./Line-Cz9iuHIb.js";import{C as X}from"./Curve-DX6i7y1N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-6WLroyVF.js";import"./RechartsWrapper-Ddpcm_Bi.js";import"./axisSelectors-BCLDkErh.js";import"./throttle-CTOajQ3R.js";import"./index-BpnKJ17e.js";import"./index-C_RIjmQF.js";import"./d3-scale-CNw_APXm.js";import"./index-DXNGRRuP.js";import"./index-JMX4B72w.js";import"./renderedTicksSlice-rrZYFmVg.js";import"./index-ZJJtOEb6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHQ6NGvH.js";import"./chartDataContext-2knnLAcK.js";import"./CategoricalChart--3BVlkMW.js";import"./CartesianAxis-Dt-9RID0.js";import"./Layer-3ye4UFiI.js";import"./Text-JLeCEDp8.js";import"./DOMUtils-BAN9qVyI.js";import"./useId-BHCtlGO9.js";import"./useBackwardsCompatibleTheme-o--ajDl9.js";import"./Label-hJtR_DxY.js";import"./ZIndexLayer-29vxzJUo.js";import"./types-o4OSUUn5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BGi2ToIP.js";import"./symbol-N9Qfttlc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYFoVs6J.js";import"./uniqBy-CtwcYJv4.js";import"./iteratee-Czd3Xbj-.js";import"./useAnimationId-CYLXREv3.js";import"./Cross-B86mQX4m.js";import"./Rectangle-D15ntAhJ.js";import"./util-Dxo8gN5i.js";import"./Sector-C_7QN0KL.js";import"./AnimatedItems-DvmQd7Rs.js";import"./ActivePoints-CQqYot6E.js";import"./Dot-9MVoPrmB.js";import"./RegisterGraphicalItemId-BROviYY7.js";import"./ErrorBarContext-DSm_oAUC.js";import"./GraphicalItemClipPath-DbdrEo0q.js";import"./SetGraphicalItem-B0AS2kak.js";import"./getRadiusAndStrokeWidthFromDot-BE8QNtys.js";import"./ActiveShapeUtils-CcbjFIOc.js";import"./useGraphicalItemIdentity-D2kK-yFr.js";import"./step-BOR9D5VT.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
