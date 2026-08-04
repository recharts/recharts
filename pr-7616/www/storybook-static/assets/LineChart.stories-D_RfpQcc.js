import{r as s,R as e}from"./iframe-UaiYvcjH.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BA6QSB_q.js";import{R as C}from"./zIndexSlice-8ciJYIbx.js";import{L as n}from"./Line-ELdds7PM.js";import{X as p}from"./XAxis-CK0z3Vz2.js";import{T as c}from"./Tooltip-LOt2P0gE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./throttle-7x_Svn9H.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./isWellBehavedNumber-nnrZFap8.js";import"./d3-scale-Dc-s3w0P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./CategoricalChart-8pueoY18.js";import"./Layer-DOm2DEtl.js";import"./Curve-DSlq-UJh.js";import"./types-CAb7fg-d.js";import"./step-PgNHRHTl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DAGS26Tt.js";import"./Label-D-49EUqg.js";import"./Text-D929lMpi.js";import"./DOMUtils-C7Mhp4IV.js";import"./ZIndexLayer-DxXiKzAC.js";import"./useAnimationId-BTJ_iqsG.js";import"./ActivePoints-Jp_kAfDq.js";import"./Dot-BkNyMUuC.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./ErrorBarContext-CFINHyZq.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./graphicalItemIdentity-CheNksEQ.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./CartesianAxis-ebqqt3vU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DqA-fEeq.js";import"./uniqBy-BHqTd4CP.js";import"./iteratee-BoSxLbTm.js";import"./Cross-DMXTcJZT.js";import"./Rectangle-Bha7Re6V.js";import"./util-Dxo8gN5i.js";import"./Sector-BE205kWR.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};
