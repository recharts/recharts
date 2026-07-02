import{R as t}from"./iframe-CUx1TCgW.js";import{a as p}from"./isWellBehavedNumber-CUV8846M.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CNLXTUer.js";import{R as T}from"./zIndexSlice-CyWJB_IO.js";import{C as M}from"./CartesianGrid-uH6Q1yTX.js";import{X as $}from"./XAxis-XVUuusjp.js";import{Y as I}from"./YAxis-DnVtyTYT.js";import{L as O}from"./Legend-DP9jdGkT.js";import{T as W}from"./Tooltip--yATZ1LX.js";import{L as C}from"./Line-BEUTyBzO.js";import{C as X}from"./Curve-Mg827IgF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BueptT4L.js";import"./RechartsWrapper-DPzAHq-Z.js";import"./index-CvhQIsHS.js";import"./index-BwmXDkUH.js";import"./index-DFl4S33S.js";import"./index-BJ8mfrgX.js";import"./throttle-BjWBzxHj.js";import"./renderedTicksSlice-DwQTH0-L.js";import"./axisSelectors-VAnXlTNN.js";import"./d3-scale-BarhEeTK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BiT6vKeC.js";import"./chartDataContext-DUiXobBm.js";import"./CategoricalChart-BV_ZCc_1.js";import"./CartesianAxis-BocxUsAL.js";import"./Layer-DkHmdg7h.js";import"./Text-C0Bz7-yS.js";import"./DOMUtils-D7djwgJL.js";import"./Label-Bd7WMI0X.js";import"./ZIndexLayer-B-tk4cwY.js";import"./types-5kZg7jgz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Ce7wtBIG.js";import"./symbol-3q2YBEtt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DNdZu7MT.js";import"./uniqBy-DSJ0hFsD.js";import"./iteratee-CuBpgztc.js";import"./useAnimationId-Cx6lzC6E.js";import"./Cross-Bzly_9F2.js";import"./Rectangle-C2v-PTgf.js";import"./util-Dxo8gN5i.js";import"./Sector-BCKOGouU.js";import"./AnimatedItems-ScvXBbCb.js";import"./ActivePoints-BFL4MLXA.js";import"./Dot-CUsFN3PS.js";import"./RegisterGraphicalItemId-BLmhcDXv.js";import"./ErrorBarContext-h5QrqZl2.js";import"./GraphicalItemClipPath-J1io5uDl.js";import"./SetGraphicalItem-CaISs0rU.js";import"./getRadiusAndStrokeWidthFromDot-CPoinBTG.js";import"./ActiveShapeUtils-D9lVsXDE.js";import"./step-Dl-o-ZW1.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
