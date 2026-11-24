import{r as i,R as e}from"./iframe-rnrsK-Eh.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Bjdy_db4.js";import{R as C}from"./zIndexSlice-D3HmR0ZR.js";import{L as s}from"./Line-BDX7TuS6.js";import{X as p}from"./XAxis-DcA-2yah.js";import{T as c}from"./Tooltip-DFlRaAqD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tBuCuUXe.js";import"./resolveDefaultProps-b1TTGhvT.js";import"./get-CjriyByo.js";import"./axisSelectors-CIZ-q5JG.js";import"./throttle-BHymO33n.js";import"./index-BSOAsjef.js";import"./index-D8r-4r4t.js";import"./polarAxisSelectors-B1h4eON8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaDfMMmk.js";import"./index-BZjQac1j.js";import"./index-BcrgJFGN.js";import"./renderedTicksSlice-3O1E6NtI.js";import"./index-BWQTU1nE.js";import"./fillDefinitions-ooWue1m4.js";import"./CartesianChart-CdGDQA5c.js";import"./chartDataContext-BaXmKLtm.js";import"./CategoricalChart-B0mb1tZK.js";import"./getRadiusAndStrokeWidthFromDot-Aa26YM9W.js";import"./Layer-D4ktbd_J.js";import"./Curve-B8ieUi4B.js";import"./types-CAJhQIqW.js";import"./step-BNGv-ij0.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DPy91L9k.js";import"./Label-DJYYuUsE.js";import"./Text-WHgqMzAs.js";import"./ZIndexLayer-dsZ60IUc.js";import"./ActivePoints-G3nCAY-X.js";import"./Dot-CpkbvyGy.js";import"./activeStyles-9CDj_AEF.js";import"./useAnimationId-COqzWo9S.js";import"./Symbols-CFUB5kvN.js";import"./symbol-B4eSOryt.js";import"./ErrorBarContext-YhaLsFzE.js";import"./SetGraphicalItem-Bhp-y0Ji.js";import"./ActiveShapeUtils-O7QOH_04.js";import"./useEffectiveDataKey-DftwbdUx.js";import"./CartesianAxis-ZiuFLH_J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BnxZL8WN.js";import"./uniqBy-C0Cq__z-.js";import"./iteratee-CngnK0pj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BmKhywuH.js";import"./Rectangle-8OmFGHQb.js";import"./util-Dxo8gN5i.js";import"./Sector-C0IDAhtH.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
