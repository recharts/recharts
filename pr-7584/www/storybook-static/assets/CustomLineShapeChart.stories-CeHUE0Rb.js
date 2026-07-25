import{R as t}from"./iframe-GS6tWWpF.js";import{i as p}from"./isWellBehavedNumber-BW5zPDve.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-JxKSilzw.js";import{R as T}from"./zIndexSlice-CiKhndgZ.js";import{C as M}from"./CartesianGrid-F-KU-36M.js";import{X as $}from"./XAxis-Bx65GQrC.js";import{Y as I}from"./YAxis-CUfaioHk.js";import{L as O}from"./Legend-Ctt76U1g.js";import{T as W}from"./Tooltip-CRtp8_AT.js";import{L as C}from"./Line-gVUwMIqe.js";import{C as X}from"./Curve-DDxJXFaA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZjeTZ39.js";import"./RechartsWrapper-Bqosr4xy.js";import"./index-C6xrf2-Z.js";import"./index-Di15QQ8x.js";import"./index-DfG20-Zs.js";import"./index-C2uAvHn9.js";import"./throttle-C-IXy7Zr.js";import"./renderedTicksSlice-BVCAtPIh.js";import"./axisSelectors-yfKyalbW.js";import"./d3-scale-CHW2xi3e.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DRtNG600.js";import"./chartDataContext-BZ0W7ETA.js";import"./CategoricalChart-CsHskHmr.js";import"./CartesianAxis-DPqu1YVY.js";import"./Layer-C3MBqN5-.js";import"./Text-CUZPSeM8.js";import"./DOMUtils-cB85CLZU.js";import"./Label--UyVH_YZ.js";import"./ZIndexLayer-CvFwUsq0.js";import"./types-CDHFW4tQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BhQRMxL7.js";import"./symbol-B6SQN_ex.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFy6UBvQ.js";import"./uniqBy-JuZLKXnX.js";import"./iteratee-BtotmXAq.js";import"./useAnimationId-ZFeP4ddJ.js";import"./Cross-DDUawsZ9.js";import"./Rectangle-CdIuzb_S.js";import"./util-Dxo8gN5i.js";import"./Sector-eD6mDZA_.js";import"./AnimatedItems-DA4k4owl.js";import"./ActivePoints-DIXN5qj6.js";import"./Dot-Bv3wAmgY.js";import"./RegisterGraphicalItemId-BRazAOV1.js";import"./ErrorBarContext-D6lw1b7W.js";import"./GraphicalItemClipPath-fALP-Awj.js";import"./SetGraphicalItem-XvYC4EkM.js";import"./getRadiusAndStrokeWidthFromDot-Dd_icqpB.js";import"./ActiveShapeUtils-DTjXKb5y.js";import"./step-DCV2XceF.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
