import{R as t}from"./iframe-C_py9VKy.js";import{a as p}from"./isWellBehavedNumber-wktK8CV7.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Bi2vQMMx.js";import{R as T}from"./zIndexSlice-CXPNbLh0.js";import{C as M}from"./CartesianGrid-D7LbaWML.js";import{X as $}from"./XAxis-BQTm69sE.js";import{Y as I}from"./YAxis-1vUjo3Fh.js";import{L as O}from"./Legend-C9QuHw3N.js";import{T as W}from"./Tooltip-D5bH_ViD.js";import{L as C}from"./Line-COmMeHls.js";import{C as X}from"./Curve-Ca8nGQE4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./throttle-y-97qzKM.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./axisSelectors-B-GKTKT_.js";import"./d3-scale-pH2VCnNX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";import"./CartesianAxis-DS2REUGr.js";import"./Layer-CJpPulsx.js";import"./Text-CnffV04t.js";import"./DOMUtils-B2RmK7a8.js";import"./Label-DaE8MMQO.js";import"./ZIndexLayer-cfs89nNi.js";import"./types-BjPO6Abx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BRpNQush.js";import"./symbol-BeAdi3ON.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Z_Rs-D5L.js";import"./uniqBy-DjIUo5Dj.js";import"./iteratee-ZqN9mw6Q.js";import"./useAnimationId-BmA3o4RX.js";import"./Cross-DS3tGU5b.js";import"./Rectangle-Dwgjvbsc.js";import"./util-Dxo8gN5i.js";import"./Sector-PxeYqRgC.js";import"./AnimatedItems-BApiggtL.js";import"./ActivePoints-VBrZY_w6.js";import"./Dot-CgRov5lu.js";import"./RegisterGraphicalItemId-BKPrbhTB.js";import"./ErrorBarContext-SwQJmcJ0.js";import"./GraphicalItemClipPath-oE60EnJf.js";import"./SetGraphicalItem-B_lgAFV8.js";import"./getRadiusAndStrokeWidthFromDot-CRhSkevf.js";import"./ActiveShapeUtils-SIhXzT4o.js";import"./step-CMEfwDT5.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
