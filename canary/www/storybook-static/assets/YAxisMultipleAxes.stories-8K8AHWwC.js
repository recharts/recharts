import{R as t}from"./iframe-B33Y4kOs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DoRVJcGp.js";import{R as l}from"./zIndexSlice-BV8vqz-A.js";import{C as x}from"./ComposedChart-C6iXQW_F.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DPrRDsS0.js";import{L as a}from"./Line-BF6bp28v.js";import{X as c}from"./XAxis-D7BTfG5w.js";import{T as g}from"./Tooltip-BC0jNTdj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DQnbTFco.js";import"./Text-CnUdOxIr.js";import"./resolveDefaultProps-Bx3AGNLv.js";import"./pageBackground-CmnWJfG9.js";import"./isWellBehavedNumber-B7wXqJ9C.js";import"./useId-CRYD77s2.js";import"./useBackwardsCompatibleTheme-df6TzhQ0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dm3QzWrT.js";import"./index-D1w13u3d.js";import"./index-CqFL6s1V.js";import"./axisSelectors-CPTmOT_R.js";import"./throttle-Dx9BFaqt.js";import"./d3-scale-BRwhKw_2.js";import"./CartesianAxis-CldRPjzS.js";import"./Layer-DI-mGCka.js";import"./types-cCXzDmUf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C0XiR0Pe.js";import"./index-BM_y8xA7.js";import"./index-BLcaxlXW.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D4BmCMdI.js";import"./index--PM34IXj.js";import"./CartesianChart-BgWqiAzR.js";import"./chartDataContext-CCe5PXsU.js";import"./CategoricalChart-Dg0sKqob.js";import"./activeStyles-VptiM0EE.js";import"./useAnimationId-B0LKL5_Y.js";import"./dataEntryStyles-C0yw4w94.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9nqQ6MB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZNSeBf4.js";import"./tooltipContext-CYhba1Wa.js";import"./ErrorBarContext-CHVe4J2J.js";import"./GraphicalItemClipPath-C_VqIcXn.js";import"./SetGraphicalItem-B6sh6hag.js";import"./getZIndexFromUnknown-uqVHwP5u.js";import"./useEffectiveDataKey-BxhkF0gV.js";import"./Curve-CcWZ_EFW.js";import"./step-CvwqDq2P.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DMCMMH9m.js";import"./Dot-BLVwwgSv.js";import"./getRadiusAndStrokeWidthFromDot-BCAZrIZb.js";import"./useElementOffset-_gZZN4km.js";import"./uniqBy-DtqOuezx.js";import"./iteratee-Cn3UJQOJ.js";import"./Cross-Bom6Oekg.js";import"./Sector-MtPCiOU-.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
