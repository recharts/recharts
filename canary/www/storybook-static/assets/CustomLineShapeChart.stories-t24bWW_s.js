import{R as t}from"./iframe-CxG2PZXj.js";import{i as p}from"./isWellBehavedNumber-8T9tdyF1.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D-jbm5MF.js";import{R as T}from"./zIndexSlice-DAD_xoRY.js";import{C as M}from"./CartesianGrid-Dr3fExMw.js";import{X as $}from"./XAxis-B4ycL0c8.js";import{Y as I}from"./YAxis-B1kX2SHx.js";import{L as O}from"./Legend-BAPAMVGJ.js";import{T as W}from"./Tooltip-D4E4fjDv.js";import{L as C}from"./Line-_o8LGB_p.js";import{C as X}from"./Curve-e0q54Fup.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DUaFgx3m.js";import"./RechartsWrapper-B0t_sSZG.js";import"./index-5B0X8Ccq.js";import"./index-DK4BYQS1.js";import"./index-DToZBGKP.js";import"./index-DiKZrp18.js";import"./throttle-BLzUd2wF.js";import"./renderedTicksSlice-DK3Qh-AH.js";import"./axisSelectors-BOLkCBrq.js";import"./d3-scale-LDX-W-e5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqtDQP9t.js";import"./chartDataContext-Cw7l7MNk.js";import"./CategoricalChart-Dozh9-kX.js";import"./CartesianAxis--mae7NqH.js";import"./Layer-Cge6P4R-.js";import"./Text-Cndr_sMa.js";import"./DOMUtils-D8hCt3_g.js";import"./Label-Z4HB-UJ_.js";import"./ZIndexLayer-kEwpMnQu.js";import"./types-Da-j7B5o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BwKJCYen.js";import"./symbol-B-j-jSQL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpY2ID8s.js";import"./uniqBy-BHBdLEDm.js";import"./iteratee-DVQ7CCFT.js";import"./useAnimationId-D_YXQiTc.js";import"./Cross-DqS9wKdN.js";import"./Rectangle-Dg43H9ES.js";import"./util-Dxo8gN5i.js";import"./Sector-CtOvhzVo.js";import"./AnimatedItems-DqWCyLkw.js";import"./ActivePoints-Dtvrk-n_.js";import"./Dot-B9yiNv-3.js";import"./RegisterGraphicalItemId-Cn9-4_hp.js";import"./ErrorBarContext-DRFeJFbi.js";import"./GraphicalItemClipPath-m4xLKPFC.js";import"./SetGraphicalItem-C-4LQBhg.js";import"./getRadiusAndStrokeWidthFromDot-3b51JfXm.js";import"./ActiveShapeUtils-CVhA8l6O.js";import"./step-wD8k8EBt.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
