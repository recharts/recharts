import{R as t}from"./iframe-UUS7gS8r.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cy8DgzpK.js";import{R as l}from"./zIndexSlice-DC8Mmyu0.js";import{C as x}from"./ComposedChart-DyYzfQP5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CC6OTG74.js";import{L as a}from"./Line-BhGsVkF7.js";import{X as c}from"./XAxis-Cy2DOw7O.js";import{T as g}from"./Tooltip-mWxjl5Ag.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cr7fVLhy.js";import"./Text-Dm1h-qE_.js";import"./resolveDefaultProps-CGDCDwfC.js";import"./DOMUtils-dYR_cylo.js";import"./pageBackground-BJvSTYQp.js";import"./ZIndexLayer-CHgyGuEd.js";import"./index-B3bpwb38.js";import"./index-DE7_Lyvr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5ho1KqAt.js";import"./throttle-CgxVsgWn.js";import"./axisSelectors-BhKtxZfo.js";import"./d3-scale-DXJSpI4F.js";import"./CartesianAxis-CqSL8oIY.js";import"./Layer-CAt7TJL2.js";import"./types-CpFwJGls.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RI1nm7LM.js";import"./index-DlU_WMoq.js";import"./index-BEWOexqM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CpoOBNO8.js";import"./index-w---ZacB.js";import"./CartesianChart-C-KduMFZ.js";import"./ZIndexPortal-DB3Ky3lt.js";import"./CategoricalChart-kgfDSXE6.js";import"./LabelList-BfhKeSlq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lDg8xK2m.js";import"./fillDefinitions-TYLf-280.js";import"./useAnimationId-BqxzW97i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Df31_mcI.js";import"./tooltipContext-DIhpPeC9.js";import"./dataEntryStyles-D0nTu1H4.js";import"./ErrorBarContext-BNmRSNHp.js";import"./activeStyles-C25hf-sM.js";import"./SetGraphicalItem-DsTeZeM0.js";import"./getZIndexFromUnknown-B6MYu_hM.js";import"./useEffectiveDataKey-4NPbYdMg.js";import"./omit-CpAsrXTz.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C4dbZ49s.js";import"./step-TKY5Ryld.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CKMzfD8D.js";import"./Dot-CwQJh2C3.js";import"./Symbols-fRcdzfv5.js";import"./symbol-BFpIpW6Y.js";import"./getRadiusAndStrokeWidthFromDot-CyVRyLxc.js";import"./useElementOffset-BT8ie4xh.js";import"./uniqBy-pgmiU_pf.js";import"./iteratee-D62UJLHy.js";import"./Cross-DteNMS9C.js";import"./Sector-DISySFjD.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
