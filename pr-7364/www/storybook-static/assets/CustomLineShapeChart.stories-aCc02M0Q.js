import{e as t}from"./iframe-Cv0qW2ko.js";import{g as D,J as p}from"./arrayEqualityCheck-dw2UPZEJ.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-DXxfBe5M.js";import{C as T}from"./CartesianGrid-DMXVmlBW.js";import{X as M}from"./XAxis-BT82JTqb.js";import{Y as $}from"./YAxis-B0w9h5lM.js";import{L as O}from"./Legend-DddRhEKx.js";import{T as W}from"./Tooltip-MfN7ymMA.js";import{L as C}from"./Line-G_mcTi4c.js";import{R as X}from"./RechartsHookInspector-CkUp2GTc.js";import{C as Y}from"./Curve-Bz0VDg5l.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Do4zKK3Y.js";import"./immer-BQQ92H22.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-dCBWaPWI.js";import"./index-B3dmmAiW.js";import"./hooks-CJSe3LTj.js";import"./axisSelectors-C2eMQvfK.js";import"./d3-scale-Dsb1SLZO.js";import"./zIndexSlice-CHCTzA5s.js";import"./renderedTicksSlice-BOF6sMGg.js";import"./CartesianChart-DqdcaXnI.js";import"./chartDataContext-Cp9nHQ3M.js";import"./CategoricalChart-QPWmKUQ6.js";import"./CartesianAxis-BZyagfMs.js";import"./Layer-CsQNRvLO.js";import"./Text-DZAUevoT.js";import"./DOMUtils-CHQYQ4Y1.js";import"./Label-BMEmaXKp.js";import"./ZIndexLayer-DcdIn6Lk.js";import"./types-D0-2-__S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BZ1fsnkh.js";import"./symbol-C6znSeY2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvAKpVC2.js";import"./uniqBy-DEfTIPXQ.js";import"./iteratee-BiY_dFh3.js";import"./useAnimationId-CYCjPTVx.js";import"./Cross-lITeLapR.js";import"./Rectangle-vIAq55MV.js";import"./Sector-DnzP2SdJ.js";import"./ReactUtils-pum_VzDZ.js";import"./ActivePoints-BU1jJ3Mc.js";import"./Dot--rMp3x47.js";import"./RegisterGraphicalItemId-DphlggEW.js";import"./ErrorBarContext-DcaWRm0D.js";import"./GraphicalItemClipPath-CyQi9Ewc.js";import"./SetGraphicalItem-tehWRJf-.js";import"./getRadiusAndStrokeWidthFromDot-BMewwEnB.js";import"./ActiveShapeUtils-DtjFfAfB.js";import"./index-DGomxYSM.js";import"./ChartSizeDimensions-CCGNwFzu.js";import"./OffsetShower-CKkYdDnc.js";import"./PlotAreaShower-DEg1EoJ-.js";import"./step-BgXTWRgv.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
