import{r as i,R as e}from"./iframe-tfhlM7RE.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BGyq1OFs.js";import{R as C}from"./zIndexSlice-B471v4Lb.js";import{L as s}from"./Line-bh6qw2At.js";import{X as p}from"./XAxis-B7I9Q0Cl.js";import{T as c}from"./Tooltip-BCCeYETg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDpiUUXi.js";import"./resolveDefaultProps-DL75x_1S.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DJx7DAnJ.js";import"./throttle-CXjKONS2.js";import"./index-BTN7W_Yl.js";import"./index-lTJQPG4X.js";import"./polarAxisSelectors-BpOt7LI8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D6t4zM3P.js";import"./index-Dv3JWEH0.js";import"./index-HYmTeb2Q.js";import"./renderedTicksSlice-DbMZHvdq.js";import"./index-MeXGvWIN.js";import"./CartesianChart-DU4kdG2u.js";import"./chartDataContext-DaAlq-l7.js";import"./CategoricalChart-CUmY4tZ5.js";import"./Layer-BL0J2r_i.js";import"./Curve-BOSLFwGN.js";import"./types-D9bKTCt9.js";import"./step-B0V8T17V.js";import"./path-DyVhHtw_.js";import"./activeStyles-BEaPJgw0.js";import"./Label-Dc9_QYO6.js";import"./Text-5W0Vtyw-.js";import"./pageBackground-0qhqc0cB.js";import"./useId-Bzzww67M.js";import"./ZIndexLayer-C-CGrvp9.js";import"./dataEntryStyles-D3tcZitS.js";import"./useAnimationId-BfuVUtmA.js";import"./ActivePoints-C0JmsTOw.js";import"./Dot-DqxCp5yP.js";import"./Symbols-B52ZExKH.js";import"./symbol-BSe1lArF.js";import"./RegisterGraphicalItemId-KBiFRx-Y.js";import"./ErrorBarContext-WVyXc6eb.js";import"./SetGraphicalItem-nKtDGPi3.js";import"./getRadiusAndStrokeWidthFromDot-DpOR5CEC.js";import"./ActiveShapeUtils-DJsr9xRk.js";import"./useEffectiveDataKey-Vj1bvM5G.js";import"./CartesianAxis-DyvVeGzf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-COxlkJtV.js";import"./uniqBy-tG89lOwe.js";import"./iteratee-cVMjOz7p.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CY3Zzw98.js";import"./Rectangle-BYTDxp40.js";import"./util-Dxo8gN5i.js";import"./Sector-BSPpeyjV.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,He as __namedExportsOrder,Oe as default};
