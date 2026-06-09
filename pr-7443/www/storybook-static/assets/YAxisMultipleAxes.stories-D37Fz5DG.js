import{R as t}from"./iframe-Dn7uhoyL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BfFk8v58.js";import{R as l}from"./zIndexSlice-CVPi3ttj.js";import{C as x}from"./ComposedChart-CB9Nre2s.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BrBh0euE.js";import{L as a}from"./Line-Dj80C8Yq.js";import{X as c}from"./XAxis-CM-PbRui.js";import{T as g}from"./Tooltip-CmBrx--3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BWJg7GwY.js";import"./CartesianAxis-BFlE9wN2.js";import"./Layer-0_0lU0ce.js";import"./resolveDefaultProps-CdaF0R9o.js";import"./Text-Coel_U_-.js";import"./DOMUtils-DMf79wlK.js";import"./isWellBehavedNumber-CWLsfq8q.js";import"./Label-BkxCdWVF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWtyWVlG.js";import"./index-Cy5HZ0nr.js";import"./index-CSiJtewq.js";import"./types-Bnw4G7MR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-NsLko8.js";import"./immer-jPz9tOCf.js";import"./RechartsWrapper-BxRk2Gdp.js";import"./index-Bq40lsYa.js";import"./index-DD0InOiJ.js";import"./axisSelectors-CcayQcVn.js";import"./d3-scale-Cgmb0cG0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxfKGwU.js";import"./chartDataContext-CxM1m1he.js";import"./CategoricalChart-vFRRVoOy.js";import"./tooltipContext-Cbb2NkgC.js";import"./AnimatedItems-BOxaWbpG.js";import"./useAnimationId-DyeHQUGR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C7YkQMq8.js";import"./ActiveShapeUtils-dzMUbVJX.js";import"./RegisterGraphicalItemId-DNlA1n-y.js";import"./ErrorBarContext-8EwqaTjA.js";import"./GraphicalItemClipPath-Ml5Lm9cP.js";import"./SetGraphicalItem-r_k8Lha2.js";import"./getZIndexFromUnknown-DWMqRqlW.js";import"./graphicalItemSelectors-aMcZFkec.js";import"./Curve-dLTkUQDk.js";import"./step-DtaB3Afi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BJJpASAl.js";import"./Dot-BCY87lLt.js";import"./getRadiusAndStrokeWidthFromDot-BlZL4Q4R.js";import"./useElementOffset-BS2jKIzO.js";import"./uniqBy-BegxbEUU.js";import"./iteratee-BQ8u-VLy.js";import"./Cross-D5X-79vf.js";import"./Sector-D2HI9UwR.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
