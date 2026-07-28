import{R as t}from"./iframe-BpGtcNOk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CzpQ82Ya.js";import{R as l}from"./zIndexSlice-BUkXJe7m.js";import{C as x}from"./ComposedChart-B3v6uaK5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DeXkykzA.js";import{L as a}from"./Line-C6eQtL0W.js";import{X as c}from"./XAxis-xA3C2iEm.js";import{T as g}from"./Tooltip-B_Inm8uT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C36sPR-f.js";import"./Layer-CuHhWFqD.js";import"./resolveDefaultProps-Bzz9qGby.js";import"./Text-C5eSQgGe.js";import"./DOMUtils-Bd2Qm1G_.js";import"./isWellBehavedNumber-CgtKnfGk.js";import"./Label-CVd1F7qG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cu4Swk1f.js";import"./index-CHBEpFe4.js";import"./index-CEaO1Ily.js";import"./types-CFaUoyvU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CgSHpo4d.js";import"./throttle-D7JHSkAt.js";import"./RechartsThemeContext-CLwClxTv.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-8zW8Q-QW.js";import"./index-CWPU6MDT.js";import"./index-B2c9XwPD.js";import"./axisSelectors-DvNlgVd_.js";import"./d3-scale-BIg-AE9c.js";import"./CartesianChart-D_T5BGrl.js";import"./chartDataContext-BnIwxX66.js";import"./CategoricalChart-cfDxlkao.js";import"./tooltipContext-BQnmAs8_.js";import"./AnimatedItems-I1ECyx5O.js";import"./useAnimationId-B7_Ne5YB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1PkWZRq5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BdR0GCmt.js";import"./RegisterGraphicalItemId-fTSs4quI.js";import"./ErrorBarContext-D-HuE8jj.js";import"./GraphicalItemClipPath-CBj-Oygo.js";import"./SetGraphicalItem-Dc3K4Fiu.js";import"./getZIndexFromUnknown-Buk6t42b.js";import"./graphicalItemSelectors-CxriLMeL.js";import"./Curve-DyH_liqO.js";import"./step-BGQUnAp4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bk3RD_iz.js";import"./Dot-DC3GiKbg.js";import"./getRadiusAndStrokeWidthFromDot-DErAjZBx.js";import"./useElementOffset-DPOTi7dF.js";import"./uniqBy-CRLvWKL0.js";import"./iteratee-B4OnOvXg.js";import"./Cross-DFN9xvam.js";import"./Sector-DAj_BRZU.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
