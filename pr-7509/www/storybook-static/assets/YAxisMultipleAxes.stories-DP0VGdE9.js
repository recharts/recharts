import{R as t}from"./iframe-4vtyrily.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BZLq-Yvr.js";import{R as l}from"./zIndexSlice-DsxXMu10.js";import{C as x}from"./ComposedChart-54KCGiVv.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-TrBer7Ss.js";import{L as a}from"./Line-Dj9X0Qtq.js";import{X as c}from"./XAxis-D8jscbum.js";import{T as g}from"./Tooltip-C922immd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CmTlD__X.js";import"./CartesianAxis-CiqNB0Kv.js";import"./Layer-BeOWFmV4.js";import"./resolveDefaultProps-CluH8H00.js";import"./Text-BI23BLmu.js";import"./DOMUtils-BhADA_J0.js";import"./isWellBehavedNumber-BgzphtrB.js";import"./Label-BGwY3uMh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSkjb5Ga.js";import"./index-058gmbYq.js";import"./index-WdI8WwRZ.js";import"./types-CBN3GvJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DadNz-JQ.js";import"./throttle-BJLHAoQW.js";import"./RechartsWrapper-BkIEJRAG.js";import"./index-DmmOL2VS.js";import"./index-lWQepKyy.js";import"./axisSelectors-b6USA22d.js";import"./d3-scale-BRChu2o4.js";import"./CartesianChart-COMuthXy.js";import"./chartDataContext-Cvy_uDzX.js";import"./CategoricalChart-Cbi53qJN.js";import"./tooltipContext-CRCqEOZ6.js";import"./AnimatedItems-DdVQ6WRa.js";import"./useAnimationId-CorgOjgO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdosgUZ5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DwhByUak.js";import"./RegisterGraphicalItemId-3aiZPuQN.js";import"./ErrorBarContext-DZAGOXyd.js";import"./GraphicalItemClipPath-Cc5Lg0-u.js";import"./SetGraphicalItem-Brisep9j.js";import"./getZIndexFromUnknown-CbDzSOYo.js";import"./graphicalItemSelectors-DwEj409d.js";import"./Curve-lJlCi-Lp.js";import"./step-BvrGRSpq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B8FHMCJl.js";import"./Dot-CRumXoSO.js";import"./getRadiusAndStrokeWidthFromDot-C0aT6Dgm.js";import"./useElementOffset-aY7P-FDX.js";import"./uniqBy-Dg7J4PMx.js";import"./iteratee-BJakvES8.js";import"./Cross-DJYNimuK.js";import"./Sector-BEKJvdH5.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
