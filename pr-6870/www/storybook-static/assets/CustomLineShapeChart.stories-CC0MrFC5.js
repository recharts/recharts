import{e as t}from"./iframe-BMyqBDY5.js";import{a as I}from"./ChartProps-Cvo8vJEE.js";import{R as K,n as p}from"./arrayEqualityCheck-DuyxfREv.js";import{L as v}from"./LineChart-ACib_My9.js";import{C as b}from"./CartesianGrid-DttEQ19N.js";import{X as A}from"./XAxis-DrX_bmOT.js";import{Y as M}from"./YAxis-gYPGT0Um.js";import{L as $}from"./Legend-DsekqhC3.js";import{T}from"./Tooltip-C6aJHee-.js";import{L as y}from"./Line-I26hMkxG.js";import{R as W}from"./RechartsHookInspector-B_A0Uap_.js";import{C as X}from"./Curve-CP_WuQoJ.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-BGKl1tyb.js";import"./PolarUtils-P_ZfIDsv.js";import"./RechartsWrapper-hMDICSaE.js";import"./hooks-CtyWZT2U.js";import"./axisSelectors-RxIOnnLe.js";import"./zIndexSlice-Dmm35KLy.js";import"./CartesianChart-Bf-CfsMF.js";import"./chartDataContext-DO_q_27U.js";import"./CategoricalChart-Bg_NZvOR.js";import"./CartesianAxis-zlmGf0lm.js";import"./Layer-DWAVkTpZ.js";import"./Text-C5dsmcfL.js";import"./DOMUtils-BxDLRwCB.js";import"./Label-Cc8j6S_C.js";import"./ZIndexLayer-BHQIN7jK.js";import"./types-C28cLjqk.js";import"./Symbols-DAD_VKXg.js";import"./useElementOffset-DF2WTDjY.js";import"./iteratee-C5e8BY8E.js";import"./Cross-C0Wr0_cY.js";import"./Rectangle-MMr5z6jI.js";import"./useAnimationId-MgACKJ1I.js";import"./Sector-Dnl75ukO.js";import"./ReactUtils-DZSdNGLK.js";import"./ActivePoints-lrJOuCF1.js";import"./Dot-DwmjpDDG.js";import"./RegisterGraphicalItemId-BGAui-Ym.js";import"./ErrorBarContext-MN1I2Bli.js";import"./GraphicalItemClipPath-CBIipGUv.js";import"./SetGraphicalItem-DXrsAiCv.js";import"./getRadiusAndStrokeWidthFromDot-CRLHMYWi.js";import"./ActiveShapeUtils-HKM8HgOk.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DUIbc0mY.js";import"./index-DIS5R2kz.js";import"./ChartSizeDimensions-BB84pelj.js";import"./OffsetShower-CeLLqloX.js";import"./PlotAreaShower-zjCOtUVv.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
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
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
