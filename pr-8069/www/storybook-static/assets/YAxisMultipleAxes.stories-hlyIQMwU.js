import{R as t}from"./iframe-DmOC-Kec.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CcRfM4MH.js";import{R as l}from"./zIndexSlice-Dnmn7sAe.js";import{C as x}from"./ComposedChart-BkZrMH3I.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DyzrN9xT.js";import{L as a}from"./Line-DKDIyTAQ.js";import{X as c}from"./XAxis-ByYBkyBH.js";import{T as g}from"./Tooltip-Duroeiyf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dya5Ed-c.js";import"./Text-CTMopfR1.js";import"./resolveDefaultProps-4b8FSqHP.js";import"./pageBackground--_ixwiIK.js";import"./isWellBehavedNumber-CieT4pBa.js";import"./useId-BuaxFojz.js";import"./useBackwardsCompatibleTheme-BIerM7O_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CPUam-Va.js";import"./index-B8dvCc79.js";import"./index-B0Er-kke.js";import"./dataEntryStyles-CeCSWdpc.js";import"./axisSelectors-BhU9IBL9.js";import"./throttle-26j8lv8v.js";import"./d3-scale-BzcnxCkj.js";import"./CartesianAxis-D2u0I9ER.js";import"./Layer-DqeA_nA2.js";import"./types-Bi5NSMkf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BbRk6kVT.js";import"./index-DauADrzh.js";import"./index-FaI1Rch4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BAE5OfjG.js";import"./index-D-7FIJbH.js";import"./CartesianChart-AsMQKsVq.js";import"./chartDataContext-CyP3b76p.js";import"./CategoricalChart-D6inGbGf.js";import"./activeStyles-CHqa9trn.js";import"./useAnimationId-BrR1kfhy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2agr858.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tFB41mpm.js";import"./tooltipContext-D0_zMEp9.js";import"./RegisterGraphicalItemId-CjMER2_v.js";import"./ErrorBarContext-CznJE672.js";import"./GraphicalItemClipPath-a-_vkjmo.js";import"./SetGraphicalItem-DTnHHD7N.js";import"./getZIndexFromUnknown-xym2cCmo.js";import"./useEffectiveDataKey-DpBICXZ6.js";import"./omit-CitTF1jq.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dsy708jZ.js";import"./step-BqN3jYrj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BeW2RHR2.js";import"./Dot-Ck4Vihzk.js";import"./getRadiusAndStrokeWidthFromDot-CG4C4UUI.js";import"./useElementOffset-ZDsHkVD5.js";import"./uniqBy-BV3xScZI.js";import"./iteratee-M-5VHa93.js";import"./Cross-DDoE-SGL.js";import"./Sector-CgcdPgVW.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
