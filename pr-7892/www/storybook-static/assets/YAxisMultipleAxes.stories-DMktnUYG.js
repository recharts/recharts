import{R as t}from"./iframe-C9psKz5H.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-hQp9fU0j.js";import{R as l}from"./zIndexSlice-DpmGRp-Q.js";import{C as x}from"./ComposedChart-DVW7IlRi.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-FCCAvm-T.js";import{L as a}from"./Line-DANxSI-f.js";import{X as c}from"./XAxis-7TSk_dxf.js";import{T as g}from"./Tooltip-D7estliL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-tLoAdhBg.js";import"./Text-CxmkIGJJ.js";import"./resolveDefaultProps-DXpX2jzi.js";import"./DOMUtils-5QLcrI6X.js";import"./isWellBehavedNumber-DtoestQf.js";import"./useId-BmRjTouL.js";import"./useBackwardsCompatibleTheme-u-6iGz_C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dp6mI4S2.js";import"./index-D90R4_Ry.js";import"./index-DO4kgVpb.js";import"./RechartsWrapper-DBEUhNwk.js";import"./axisSelectors-BVR1qW5C.js";import"./throttle-ybqMtWK8.js";import"./d3-scale-DOPiKI9I.js";import"./index-Boed59-W.js";import"./index-C0Ds42Ok.js";import"./renderedTicksSlice-C81k7Y0M.js";import"./index-C4HmYpYK.js";import"./CartesianAxis-QX-AYICp.js";import"./Layer-D1lf7NaI.js";import"./types-Bo9cWGoI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DqQaN6li.js";import"./chartDataContext-C8FZLZVj.js";import"./CategoricalChart-oiLx-c2-.js";import"./AnimatedItems-CEzVE_qf.js";import"./useAnimationId-NO-aRC2z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DiC0sGbs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B_bGVHtn.js";import"./tooltipContext-C6VvXhV0.js";import"./RegisterGraphicalItemId-Bou02MzC.js";import"./ErrorBarContext-C0X-i2LX.js";import"./GraphicalItemClipPath-BiRBEzG3.js";import"./SetGraphicalItem-DbUk56bY.js";import"./getZIndexFromUnknown-zWUOnkFn.js";import"./useGraphicalItemIdentity-CFJPU_4U.js";import"./dataEntryStyles-DaZUr0c-.js";import"./Curve-ejO9vv5H.js";import"./step-Ba-sjoMn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DV3QsG_s.js";import"./Dot-CoxDYTLK.js";import"./getRadiusAndStrokeWidthFromDot-D95GFJQd.js";import"./useElementOffset-BFRDXyQs.js";import"./uniqBy-vdai6ABx.js";import"./iteratee-CxOXUx_n.js";import"./Cross-Bqsji87y.js";import"./Sector-BJeHlwhS.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
