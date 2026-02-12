import{e as t}from"./iframe-DqbxrOnC.js";import{R as D,n as p}from"./arrayEqualityCheck-DDnB3yQJ.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DL5hoslv.js";import{C as K}from"./CartesianGrid-DDmVEjV6.js";import{X as T}from"./XAxis-Clh3r3oa.js";import{Y as M}from"./YAxis-C1VoYxeB.js";import{L as $}from"./Legend-Dom9mrOu.js";import{T as O}from"./Tooltip-C4KAOnYt.js";import{L as C}from"./Line-D1l4t5aa.js";import{R as W}from"./RechartsHookInspector-nEoOxjIA.js";import{C as X}from"./Curve-D1iAhDrw.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-H2CuSuBD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpGZSQIF.js";import"./hooks-Bh4iEl2l.js";import"./axisSelectors-BhsfxkUf.js";import"./zIndexSlice-Be92tzJW.js";import"./CartesianChart-BmQRqUeT.js";import"./chartDataContext-DOwFKY9v.js";import"./CategoricalChart-BDtAQzJe.js";import"./CartesianAxis-CBS5lhtQ.js";import"./Layer-DO_g1bne.js";import"./Text-UMPVnpE1.js";import"./DOMUtils-DJjhPRNo.js";import"./Label-Dn_4yvvw.js";import"./ZIndexLayer-BLOQbcIf.js";import"./types-DYQm65dh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-m2t7OCzL.js";import"./useElementOffset-DGNIXEDP.js";import"./iteratee-B2QshLL-.js";import"./Cross-DxueNroP.js";import"./Rectangle-DoZxp5Jb.js";import"./useAnimationId-CZrzdjIq.js";import"./Sector-BHLa0ImP.js";import"./ReactUtils-CmTCn7uo.js";import"./ActivePoints-DIeLUbLd.js";import"./Dot-CUa8yiZU.js";import"./RegisterGraphicalItemId-BknrU22d.js";import"./ErrorBarContext-brGngOut.js";import"./GraphicalItemClipPath-BvpOtW2w.js";import"./SetGraphicalItem-D6JZdLch.js";import"./getRadiusAndStrokeWidthFromDot-CsEgUo-q.js";import"./ActiveShapeUtils-CZKx7Ui-.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CT_AsUkt.js";import"./index-DM8LAuhA.js";import"./ChartSizeDimensions-D5VWiq-O.js";import"./OffsetShower-BGmawGzl.js";import"./PlotAreaShower-Cv1rJPUW.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
