import{R as t}from"./iframe-BmS0ecXK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-p6gtuiCl.js";import{R as l}from"./zIndexSlice-ChtzqxIP.js";import{C as x}from"./ComposedChart-DaLh_jdc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DSqtxRpI.js";import{L as a}from"./Line-Dcfa59Q0.js";import{X as c}from"./XAxis-Bh2usn2R.js";import{T as g}from"./Tooltip-D9DFAcp1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-xOYEqHzO.js";import"./Text-Cy6IgmxI.js";import"./resolveDefaultProps-L-kb5cDL.js";import"./DOMUtils-nGO8S--J.js";import"./ZIndexLayer-CGSpKlNm.js";import"./index-CdWOU_Jt.js";import"./index-CT2dpPb1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CE28gFQQ.js";import"./throttle-OPlZV-qu.js";import"./axisSelectors-BzqnuZDm.js";import"./d3-scale-3fk2W2Xu.js";import"./CartesianAxis-Brh0Ot5h.js";import"./Layer-BUeogdZj.js";import"./types-BFfgrH_g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DE9Jk9Mo.js";import"./index-S9VbsYVM.js";import"./index-B2CB0vSq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CUI9gBJC.js";import"./index-B9xLgKg_.js";import"./fillDefinitions-BfTN52CB.js";import"./CartesianChart-MAWW00G9.js";import"./ZIndexPortal-BBTCIcjJ.js";import"./CategoricalChart-Y8ADkKU9.js";import"./LabelList-HbN4s7ci.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ-oVzUh.js";import"./useAnimationId-CpCNOV8e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-UpE3VQFE.js";import"./tooltipContext-VmrjPqqA.js";import"./dataEntryStyles-BusWIJtt.js";import"./ErrorBarContext-D4UbmXd_.js";import"./activeStyles-D5Ig3nSZ.js";import"./SetGraphicalItem-DxeCv-Nd.js";import"./getZIndexFromUnknown-BsWelO8Z.js";import"./useEffectiveDataKey-1aGsCLfO.js";import"./omit-DLYgWUT8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-lc4LP5Ja.js";import"./step-SGVv9xA0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DWCg0rgm.js";import"./Dot-D1LmOLCb.js";import"./Symbols-D9BPgtte.js";import"./symbol-BAUa8x3O.js";import"./getRadiusAndStrokeWidthFromDot-DJ-NIfPX.js";import"./useElementOffset-EBCaWoeA.js";import"./uniqBy-3a9GARB0.js";import"./iteratee-Cu9W3M9t.js";import"./Cross-DQ_rg4Ea.js";import"./Sector-FEOFsvPJ.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
