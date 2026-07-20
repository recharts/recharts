import{r as s,R as e}from"./iframe-S_Q04LyU.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DzYjjA-7.js";import{R as C}from"./zIndexSlice-Bxg2BBQ3.js";import{L as n}from"./Line-BOxz-rUw.js";import{X as p}from"./XAxis-D78GJHE5.js";import{T as c}from"./Tooltip-DnzE8zYC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DllIXhjL.js";import"./index-rMJKouwD.js";import"./index-TooQEcPQ.js";import"./index-B7fnCzo3.js";import"./index-bxbAArpl.js";import"./throttle-sJ5Xwj7N.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-xSk0hPIv.js";import"./axisSelectors-BPn6DSnk.js";import"./resolveDefaultProps-Dy-13YZo.js";import"./isWellBehavedNumber-B7JVG4WI.js";import"./d3-scale-C2cmQNtP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKdvFgR6.js";import"./chartDataContext-pLCds2Ae.js";import"./CategoricalChart-90tJb_l9.js";import"./Layer-gdhaFlzY.js";import"./Curve-By1OgGZW.js";import"./types-B2JQaABL.js";import"./step-DWBBqdOb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BE3OLqfb.js";import"./Label-DpgEyudD.js";import"./Text-C30Me8vu.js";import"./DOMUtils-b86ja7SN.js";import"./ZIndexLayer-Cyu3q_2t.js";import"./useAnimationId-CWYmV7EH.js";import"./ActivePoints-D50UgDCx.js";import"./Dot-D891HGOH.js";import"./RegisterGraphicalItemId-C_r44y5X.js";import"./ErrorBarContext-TTmfdmNR.js";import"./GraphicalItemClipPath-BhFzIWrz.js";import"./SetGraphicalItem-CmPnocAL.js";import"./getRadiusAndStrokeWidthFromDot-CwsW4Xpc.js";import"./ActiveShapeUtils-CQj2Q4HD.js";import"./CartesianAxis-DhttszFl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DsJA345U.js";import"./uniqBy-BtJ9oYS7.js";import"./iteratee-DpqljlNu.js";import"./Cross-CwJEmN7U.js";import"./Rectangle-Qt7Z3o8D.js";import"./util-Dxo8gN5i.js";import"./Sector-BeHgqQjL.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};
