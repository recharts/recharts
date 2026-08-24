import{R as t}from"./iframe-DY9K6heQ.js";import{a as s}from"./isWellBehavedNumber-f1cIhCPU.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-nWhfnz9Q.js";import{R as T}from"./zIndexSlice-Djux0zqs.js";import{C as M}from"./CartesianGrid-BBOY4CGe.js";import{X as $}from"./XAxis-C70fZAmi.js";import{Y as I}from"./YAxis-5RHUhJ9E.js";import{L as O}from"./Legend-3rpSVTlX.js";import{T as W}from"./Tooltip-DyX71glS.js";import{L as C}from"./Line-BBRId2pi.js";import{C as X}from"./Curve-B05IFDSM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CO8OTY-B.js";import"./RechartsWrapper-CqtOwQCr.js";import"./index-RUzZ63uG.js";import"./index-B-UxVCSc.js";import"./index-DB-c6PeB.js";import"./index-9g91mWlk.js";import"./throttle-DOydnajF.js";import"./axisSelectors-DwkKcaC_.js";import"./d3-scale-Dg6wJCEU.js";import"./renderedTicksSlice-C6QgZ4Eb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CY7DJm7t.js";import"./chartDataContext-BtMzfRRp.js";import"./CategoricalChart-COo_l3nK.js";import"./CartesianAxis-VfKXuPT2.js";import"./Layer-D519VTAP.js";import"./Text-CteNh9ks.js";import"./DOMUtils-B_xez7qI.js";import"./useId-C5bD9K_5.js";import"./useBackwardsCompatibleTheme-C3HLbI6N.js";import"./Label-CfiePbO3.js";import"./ZIndexLayer-HnenvO0i.js";import"./types-Cb4xht2_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bvnjp-u1.js";import"./symbol-Ct7I42aQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BrumgYoX.js";import"./uniqBy-lwHF6dFC.js";import"./iteratee-CNq4H92p.js";import"./useAnimationId-BQX98cVJ.js";import"./Cross-CCQTcFbN.js";import"./Rectangle-DoSmT7gp.js";import"./util-Dxo8gN5i.js";import"./Sector-D0ZqkC-O.js";import"./AnimatedItems-DF7HmAGo.js";import"./ActivePoints-6F4_jb_h.js";import"./Dot-hKVGVTVc.js";import"./RegisterGraphicalItemId-za1bJavc.js";import"./ErrorBarContext-g1sTu3z_.js";import"./GraphicalItemClipPath-BVMw74rr.js";import"./SetGraphicalItem-B5Li8-y0.js";import"./getRadiusAndStrokeWidthFromDot-C3OVaU-V.js";import"./ActiveShapeUtils-EdkW4Ajt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-vm1DaOvo.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
