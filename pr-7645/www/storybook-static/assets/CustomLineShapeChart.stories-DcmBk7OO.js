import{R as t}from"./iframe-DsrT6Igl.js";import{a as s}from"./isWellBehavedNumber-BKc-Hacq.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D_1kgV6-.js";import{R as T}from"./zIndexSlice-h68Ml9Fg.js";import{C as M}from"./CartesianGrid-X4YDn1xd.js";import{X as $}from"./XAxis-B8sGkbA_.js";import{Y as I}from"./YAxis-CZhK_UtL.js";import{L as O}from"./Legend-sjZw4-N_.js";import{T as W}from"./Tooltip-CH2R-UVQ.js";import{L as C}from"./Line-Co0or1gx.js";import{C as X}from"./Curve-BpJvhb6R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B9PzJr_D.js";import"./RechartsWrapper-CSffRmp6.js";import"./index-TmgrHUX7.js";import"./index-yiXd6Pb-.js";import"./index-CcGDpKo8.js";import"./index-CFQPgMx1.js";import"./throttle-CKywVGzs.js";import"./axisSelectors-wSA8VE6u.js";import"./d3-scale-xIAfNFu1.js";import"./renderedTicksSlice-CMKIM6y2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZwpOQ8g.js";import"./chartDataContext-CfBgcaN6.js";import"./CategoricalChart-CEyUxV14.js";import"./CartesianAxis-BXcmAp6r.js";import"./Layer-DLKGrOO6.js";import"./Text-C481n1OT.js";import"./DOMUtils-C9ccNhGG.js";import"./useBackwardsCompatibleTheme-DXRl_guv.js";import"./Label-Vp0epMck.js";import"./ZIndexLayer-CReW--vZ.js";import"./types-Dr4WwlRr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-X8jAVduP.js";import"./symbol-Blfcknp3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KJy6JXTO.js";import"./uniqBy-CcAT-JF8.js";import"./iteratee-Ch_bSXv9.js";import"./useAnimationId-B6Rv0dv4.js";import"./Cross-DdS7YOJT.js";import"./Rectangle-BTeUrZeI.js";import"./util-Dxo8gN5i.js";import"./Sector-DqkrMSqs.js";import"./AnimatedItems-BHAzNwyg.js";import"./ActivePoints-BFA4rG7L.js";import"./Dot-B2h-3AQs.js";import"./RegisterGraphicalItemId-Bitjrotw.js";import"./ErrorBarContext-CvpDkEE-.js";import"./GraphicalItemClipPath-acoCHMXA.js";import"./SetGraphicalItem-vfAWovt3.js";import"./getRadiusAndStrokeWidthFromDot-CeZkjRIS.js";import"./ActiveShapeUtils-ETIvX2m5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-CipQ0fCR.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ht=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
