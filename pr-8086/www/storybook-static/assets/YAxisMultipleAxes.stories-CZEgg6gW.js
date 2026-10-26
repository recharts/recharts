import{R as t}from"./iframe-BK3Sisey.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D-L_pdrV.js";import{R as l}from"./zIndexSlice-BetgAyCc.js";import{C as x}from"./ComposedChart-D1QZxiQE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BhmnRd8t.js";import{L as a}from"./Line-XxjUVcCS.js";import{X as c}from"./XAxis-DZM3ZRq3.js";import{T as g}from"./Tooltip-DziaoSJI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-UVuQgYwr.js";import"./Text-CRgN4x4u.js";import"./resolveDefaultProps-C_F1VMOc.js";import"./pageBackground-CgvVcPsa.js";import"./useId-zAfHK1iY.js";import"./ZIndexLayer-BE0p1xel.js";import"./index-DRUOZNOo.js";import"./index-de72ObtI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DUPrNhEV.js";import"./throttle-biJe8rDV.js";import"./dataEntryStyles-B4V6KkDF.js";import"./axisSelectors-BspbFoiI.js";import"./d3-scale-Bzw5IHoB.js";import"./CartesianAxis-DZgjpOyW.js";import"./Layer-D1HH46xf.js";import"./types-DkavCTl8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-By71GZi8.js";import"./index-c0twB4Fw.js";import"./index-B0fPjlHo.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DORC7p_L.js";import"./index-LqSrX9BA.js";import"./CartesianChart-BDnUkJu9.js";import"./chartDataContext-DOIuQ-MV.js";import"./CategoricalChart-CF961821.js";import"./activeStyles-Tawg351V.js";import"./useAnimationId-CS-FJwCc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNfPDvJT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CgpbZaR3.js";import"./tooltipContext-CoN9QxpN.js";import"./RegisterGraphicalItemId-BBZLH_Nk.js";import"./ErrorBarContext-HVXU_-2l.js";import"./SetGraphicalItem-Cx8SQgq9.js";import"./getZIndexFromUnknown-nv6vfLgI.js";import"./useEffectiveDataKey-Cwm-IkPM.js";import"./omit-73gXBF69.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DG5NWTvD.js";import"./step-DmrcgL_N.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D-7HMJrF.js";import"./Dot-SPXRnAns.js";import"./Symbols-PPNvVUUW.js";import"./symbol-BQrXtAQf.js";import"./getRadiusAndStrokeWidthFromDot-Bj490LjI.js";import"./useElementOffset-C7iIcJbq.js";import"./uniqBy-Bso09DYT.js";import"./iteratee-Bfjg1LJA.js";import"./Cross-Dxo8y2Lo.js";import"./Sector-vXpxhJQs.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
