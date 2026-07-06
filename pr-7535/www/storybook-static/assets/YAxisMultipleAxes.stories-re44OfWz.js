import{R as t}from"./iframe-7XJ2xcaa.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BG1hFypZ.js";import{R as l}from"./zIndexSlice-Smyg0ZdR.js";import{C as x}from"./ComposedChart-CsOZpoaR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C4vgLWR3.js";import{L as a}from"./Line-D0ZPViAT.js";import{X as c}from"./XAxis-C1fpfCfO.js";import{T as g}from"./Tooltip-BmtInrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-OiUDsUEB.js";import"./Layer-BGcXXZrK.js";import"./resolveDefaultProps-Dm7ujSLB.js";import"./Text-Dt_HR9_i.js";import"./DOMUtils-DVnhXYtC.js";import"./isWellBehavedNumber-C2jdcJtq.js";import"./Label-kaLCkxIc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CzQjP_gg.js";import"./index-2ovstjTu.js";import"./index-TMtczAeJ.js";import"./types-CCvMXBAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C2Tixweq.js";import"./throttle-D4811UcH.js";import"./RechartsWrapper-49lbEV7H.js";import"./index-DVTD1Fpd.js";import"./index-WU_oH4BO.js";import"./axisSelectors-BEWMGkmB.js";import"./d3-scale-BuuUT6V5.js";import"./CartesianChart-BVaoZCto.js";import"./chartDataContext-hp2Drl2b.js";import"./CategoricalChart-DLU0PYD6.js";import"./tooltipContext-CKUlWzZu.js";import"./AnimatedItems-DXPDcN2s.js";import"./useAnimationId-Bhm-Tg4Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCPFxxTI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUzuZPCF.js";import"./RegisterGraphicalItemId-ezS9CDrB.js";import"./ErrorBarContext-BQCQT8xU.js";import"./GraphicalItemClipPath-8cnbCE1N.js";import"./SetGraphicalItem-BkRk4aVf.js";import"./getZIndexFromUnknown-ncmLB9nU.js";import"./graphicalItemSelectors-DCsUtSMK.js";import"./Curve-CHo9cgN6.js";import"./step-CE2G1JBn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DwDpt2dv.js";import"./Dot-CdCHNKxE.js";import"./getRadiusAndStrokeWidthFromDot-DV9FgO6_.js";import"./useElementOffset-C-vskSZV.js";import"./uniqBy-Big4MVsT.js";import"./iteratee-BpHsmV36.js";import"./Cross-GqWREVO2.js";import"./Sector-DCIpnNip.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
