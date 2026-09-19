import{R as t}from"./iframe-RJgsiaPL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BC94qFyI.js";import{R as l}from"./zIndexSlice-CaPb3BS1.js";import{C as x}from"./ComposedChart-De4rYWqF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cajl9Kf9.js";import{L as a}from"./Line-DaDTKpZD.js";import{X as c}from"./XAxis-D1NHLWzc.js";import{T as g}from"./Tooltip-DLD8jhoi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DPnPk4i3.js";import"./Text-DZ5ZEdji.js";import"./resolveDefaultProps-B7TAC97Z.js";import"./DOMUtils-BwBerndY.js";import"./isWellBehavedNumber-BCdm_Taf.js";import"./useId-D3absDYU.js";import"./useBackwardsCompatibleTheme-DcNVN6Kh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BoWVhfOi.js";import"./index-CUt9-oqi.js";import"./index-CYBMXNtj.js";import"./RechartsWrapper-rp6dEN_z.js";import"./axisSelectors-BvLTD4U6.js";import"./throttle-2XjV57Y3.js";import"./d3-scale-a8xW28JY.js";import"./index-DvWZFtCS.js";import"./index-Bde12l31.js";import"./renderedTicksSlice-AZZMQyv9.js";import"./index-CETpxp5N.js";import"./CartesianAxis-BXFp-lIC.js";import"./Layer-CDx7YXT6.js";import"./types-C_mapbFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DJVuJ2_B.js";import"./chartDataContext-DMrvaJTD.js";import"./CategoricalChart-BIS8XmXt.js";import"./AnimatedItems-Ct76uSB6.js";import"./useAnimationId-DsRwG-rm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-0ZcZVEk0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BQ-YCn0D.js";import"./tooltipContext-BpkFELpS.js";import"./RegisterGraphicalItemId-CnzhIxcb.js";import"./ErrorBarContext-CV0SzBCK.js";import"./GraphicalItemClipPath-BmrXFZmB.js";import"./SetGraphicalItem-D4Kx71sv.js";import"./getZIndexFromUnknown-Bn9--hy9.js";import"./useGraphicalItemIdentity-BL8Yfc_I.js";import"./Curve-CFCl1kCW.js";import"./step-K1SJUhGX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B4kNxET0.js";import"./Dot-RwYGEtPS.js";import"./getRadiusAndStrokeWidthFromDot-BnbceeR1.js";import"./useElementOffset-ZiVaw6LG.js";import"./uniqBy-DLupEHg_.js";import"./iteratee-DLy57EFC.js";import"./Cross-D6ax-tR9.js";import"./Sector-Cu3Rz7Q0.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
