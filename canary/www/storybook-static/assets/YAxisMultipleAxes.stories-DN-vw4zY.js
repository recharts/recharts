import{R as t}from"./iframe-BbXL7Cr7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BvXQJzoS.js";import{R as l}from"./zIndexSlice-BR49NRPU.js";import{C as x}from"./ComposedChart-CCaJGEZA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CRUtd43q.js";import{L as a}from"./Line-CIN54Xgr.js";import{X as c}from"./XAxis-Btj2F3fL.js";import{T as g}from"./Tooltip-J7PVSXVe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BH4Z3dzl.js";import"./Text-C5yxXkZn.js";import"./resolveDefaultProps-DIGEkxJt.js";import"./DOMUtils-rWy1CvzQ.js";import"./isWellBehavedNumber-DUOtRF_5.js";import"./useId-Fqq5zcUf.js";import"./useBackwardsCompatibleTheme-DJFjGyq7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C89K7jek.js";import"./index-CvmUWFik.js";import"./index-BqU8wZ1z.js";import"./RechartsWrapper-IiQ6LAia.js";import"./index-Dax1wg5T.js";import"./index-CN5luugM.js";import"./throttle-Bn8wVsPr.js";import"./axisSelectors-BFPpN7bG.js";import"./d3-scale-CN-R3gXh.js";import"./renderedTicksSlice-BsPa3zOZ.js";import"./CartesianAxis-CEc_iNEs.js";import"./Layer-D606BzuS.js";import"./types-VwfPPVmd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DEFHsOHa.js";import"./chartDataContext-HJenhUyy.js";import"./CategoricalChart-D9M8vTvR.js";import"./AnimatedItems-BMHffIkc.js";import"./useAnimationId-CZiH3Yfv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-sTh8XH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CNVIMFtT.js";import"./tooltipContext-BOZ22ZEv.js";import"./RegisterGraphicalItemId-Cp-8L8hF.js";import"./ErrorBarContext-C0nXUhFx.js";import"./GraphicalItemClipPath-CSpG8Jrq.js";import"./SetGraphicalItem-BiIYG94Z.js";import"./getZIndexFromUnknown-Jsl6c9cv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-4MlBxNSB.js";import"./Curve-NdHov05C.js";import"./step-DT7n-Jzc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DJMU5OQu.js";import"./Dot-CBGeJdvC.js";import"./getRadiusAndStrokeWidthFromDot-BBwYGeYW.js";import"./useElementOffset-BwHd0lb7.js";import"./uniqBy-DbN_Kppn.js";import"./iteratee-C6TYOtpK.js";import"./Cross-CEQTBLEN.js";import"./Sector-C6xVrq9L.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
