import{R as t}from"./iframe-CvKbIuDU.js";import{a as p}from"./isWellBehavedNumber-DlUs4F_M.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CnHFAzW5.js";import{R as T}from"./zIndexSlice-DW-S4til.js";import{C as M}from"./CartesianGrid-Dyl0x7Ll.js";import{X as $}from"./XAxis-Dp4FSOnR.js";import{Y as I}from"./YAxis-DizKApNp.js";import{L as O}from"./Legend-H7uJ9qDj.js";import{T as W}from"./Tooltip-B_QeyoPN.js";import{L as C}from"./Line-1Tl5OsJ3.js";import{C as X}from"./Curve-CkMLKDtn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DyOOAUIY.js";import"./RechartsWrapper-Di3s7bBT.js";import"./axisSelectors-BV2JW9EX.js";import"./throttle-BTM8S8gx.js";import"./index-Z4qAt8Yv.js";import"./index-BVbsRhGr.js";import"./d3-scale-C5aBguhN.js";import"./index-BexOrbLc.js";import"./index-BIyuXW6c.js";import"./renderedTicksSlice-BomOCwRS.js";import"./index-B5qL6Iq2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CQJv70kz.js";import"./chartDataContext-CefKEXER.js";import"./CategoricalChart-BbjDOIaW.js";import"./CartesianAxis-BYZAVmga.js";import"./Layer-BNmLXrt-.js";import"./Text-B6N2t5jR.js";import"./pageBackground-ChMXawke.js";import"./useId-6H2iqgtd.js";import"./useBackwardsCompatibleTheme-CkVmHcf-.js";import"./Label-C9wGNRIk.js";import"./ZIndexLayer-C4jXpx6X.js";import"./types-ChWN3J9r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DPWpbZ6Y.js";import"./symbol-BU0aMV8N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bml3kAbb.js";import"./uniqBy-CQiqXRxs.js";import"./iteratee-CRQDYF1S.js";import"./useAnimationId-DTylORVO.js";import"./Cross-_edP6GcA.js";import"./Rectangle-Ca8NWDZ8.js";import"./util-Dxo8gN5i.js";import"./Sector-YOyxb4oy.js";import"./activeStyles-Cf2oumzq.js";import"./dataEntryStyles-DpltKyOE.js";import"./ActivePoints-D5UTi5xW.js";import"./Dot-DCFEnowe.js";import"./ErrorBarContext-DAV26R-G.js";import"./GraphicalItemClipPath-BmBLy2cz.js";import"./SetGraphicalItem-fk9D7m_b.js";import"./getRadiusAndStrokeWidthFromDot-Dk6kygWL.js";import"./ActiveShapeUtils-DkA-OS5a.js";import"./useEffectiveDataKey-DWaNxJOV.js";import"./step-DZOnd08g.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
