import{R as t}from"./iframe-D4CuLoZz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-LKz9SoCr.js";import{R as l}from"./zIndexSlice-SXe885_i.js";import{C as x}from"./ComposedChart-DB0jlCn6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-KyGDk3_z.js";import{L as a}from"./Line-CEbuZzhx.js";import{X as c}from"./XAxis-eawce65C.js";import{T as g}from"./Tooltip-CYSWzhO2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DBuLXD7N.js";import"./CartesianAxis-ntk7Om5m.js";import"./Layer-xCWemoOx.js";import"./resolveDefaultProps-BIWi1Y-8.js";import"./Text-xYQOnqwx.js";import"./DOMUtils-CZgli98g.js";import"./isWellBehavedNumber-BHyLU3rm.js";import"./Label-CcUkFPjg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CwgCBSKX.js";import"./index-DKrwxI3E.js";import"./index-Cama49zD.js";import"./types-DyFRA-Bh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHw40_9x.js";import"./immer-CFokkZQV.js";import"./RechartsWrapper-BytBl7Lq.js";import"./index-D0U5tyHV.js";import"./index-CRkJbrCH.js";import"./axisSelectors-BkOYejTH.js";import"./d3-scale-Bg-gbMqf.js";import"./CartesianChart-D5hGWEsl.js";import"./chartDataContext-BdBlfWO1.js";import"./CategoricalChart-CDNCF4CW.js";import"./tooltipContext-BYitAcng.js";import"./AnimatedItems-EJSTJ3cq.js";import"./useAnimationId-DrVwX4j9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wZa2ZWZX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2FaHUJe.js";import"./RegisterGraphicalItemId-BYXBvuEW.js";import"./ErrorBarContext-uD9druzE.js";import"./GraphicalItemClipPath-Dcao9gEo.js";import"./SetGraphicalItem-D5XyE2WD.js";import"./getZIndexFromUnknown-iar16ZxL.js";import"./graphicalItemSelectors-DOamrowD.js";import"./Curve-BhJuHD0L.js";import"./step-DSq6gAzd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BXZGkgHe.js";import"./Dot-Du83lW60.js";import"./getRadiusAndStrokeWidthFromDot-CsYgyjN7.js";import"./useElementOffset-DHHmWbKa.js";import"./uniqBy-YpJRvRQv.js";import"./iteratee-WqXFclZi.js";import"./Cross-DDsze3iQ.js";import"./Sector-DQrYYCd9.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
