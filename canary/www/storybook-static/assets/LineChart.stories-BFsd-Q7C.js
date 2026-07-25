import{r as s,R as e}from"./iframe-DX-hRh6v.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-vLpfRzFm.js";import{R as C}from"./zIndexSlice-CF9qsbsG.js";import{L as n}from"./Line-BH8HaOE7.js";import{X as p}from"./XAxis-CYn79B9K.js";import{T as c}from"./Tooltip-BJGeDUzS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ccwce-LO.js";import"./index-BkRrDgeK.js";import"./index-BityOqCw.js";import"./index-C_co4uh9.js";import"./index-qEhkJMvm.js";import"./throttle-C3bKSARL.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Cdw3MVyO.js";import"./axisSelectors-CnUP3J5o.js";import"./resolveDefaultProps-Dl_-nEqR.js";import"./isWellBehavedNumber-B2WkM8vL.js";import"./d3-scale-CyRwSV0J.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-nrO7ZyU0.js";import"./chartDataContext-BrdpOtNY.js";import"./CategoricalChart-wLfPHTeT.js";import"./Layer-CI3urb_2.js";import"./Curve-DBTqjj17.js";import"./types-B5ssIei3.js";import"./step-ghZz1pkQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D1fsZDjw.js";import"./Label-C_1G92on.js";import"./Text-DrQewChW.js";import"./DOMUtils-DdDZ08pJ.js";import"./ZIndexLayer-BUVc2LfK.js";import"./useAnimationId-oXOpEwNt.js";import"./ActivePoints-C0NUOkGZ.js";import"./Dot-Dn04Kjs0.js";import"./RegisterGraphicalItemId-CpEpaHjk.js";import"./ErrorBarContext-DCgqaVYx.js";import"./GraphicalItemClipPath-DgEtuK8_.js";import"./SetGraphicalItem-BVTByb6H.js";import"./getRadiusAndStrokeWidthFromDot-k00jkWeK.js";import"./ActiveShapeUtils-CgP8l6zk.js";import"./CartesianAxis-D-d2ZuWG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-Tj-Qp8PQ.js";import"./uniqBy-BOqCl2hX.js";import"./iteratee-QMX4YEQu.js";import"./Cross-ipAmTQrY.js";import"./Rectangle-C4fEhR5i.js";import"./util-Dxo8gN5i.js";import"./Sector-she__mVB.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
