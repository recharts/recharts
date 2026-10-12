import{R as t}from"./iframe-BuvSZiBU.js";import{a as p}from"./isWellBehavedNumber-B_8a6RB1.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D79Znfgx.js";import{R as T}from"./zIndexSlice-CQnbxV7B.js";import{C as M}from"./CartesianGrid-CnOEuHER.js";import{X as $}from"./XAxis-BOfa2s22.js";import{Y as I}from"./YAxis-BWzjkf00.js";import{L as O}from"./Legend-xXJG6pwb.js";import{T as W}from"./Tooltip-BZ4jR-Jc.js";import{L as C}from"./Line-BUpD7j4-.js";import{C as X}from"./Curve-DvYuS0m6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfSOVUjP.js";import"./RechartsWrapper-DMwFRg1j.js";import"./axisSelectors-DGKzkChq.js";import"./throttle-Csayz_X_.js";import"./index-BXTQQRSe.js";import"./index-hoeugXO7.js";import"./d3-scale-B4_DxsXg.js";import"./index-C49MXgC-.js";import"./index-CItffRII.js";import"./renderedTicksSlice-CC7BtYy2.js";import"./index-Coj2gvLu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BHftvwV6.js";import"./chartDataContext-CCUXEs40.js";import"./CategoricalChart-4mWCyxjg.js";import"./CartesianAxis-BUinM5G-.js";import"./Layer-DVAnIpPd.js";import"./Text-BkZYuu7y.js";import"./pageBackground-BDR7TGLv.js";import"./useId-BuSUlJ9G.js";import"./useBackwardsCompatibleTheme-CJX_yJan.js";import"./Label-w8cJkoy5.js";import"./ZIndexLayer-CF-B9exK.js";import"./types-EtJbnETm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ym2AvTwr.js";import"./symbol-BCH9VJWR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tkb_p-rH.js";import"./uniqBy-BFPywt7W.js";import"./iteratee-DgIW1Mxm.js";import"./useAnimationId-CdC3v3R9.js";import"./Cross-CJRlAvh_.js";import"./Rectangle-DSr8qKkL.js";import"./util-Dxo8gN5i.js";import"./Sector-DP_bKBS8.js";import"./activeStyles-BmupzAye.js";import"./dataEntryStyles-C1ODZzqS.js";import"./ActivePoints-CYsghgN3.js";import"./Dot-BP5vqlI3.js";import"./ErrorBarContext-PD-ezkzm.js";import"./GraphicalItemClipPath-a3qbNX5k.js";import"./SetGraphicalItem-DyRgogdT.js";import"./getRadiusAndStrokeWidthFromDot-JbdAO9HR.js";import"./ActiveShapeUtils-FNOwuhtO.js";import"./useEffectiveDataKey-DUlUrCLD.js";import"./step-ozWCT_4L.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
