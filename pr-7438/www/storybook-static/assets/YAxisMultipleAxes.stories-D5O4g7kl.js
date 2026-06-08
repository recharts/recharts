import{R as t}from"./iframe-DWmnh-44.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D314iiH8.js";import{R as l}from"./zIndexSlice-BJoYTr5_.js";import{C as x}from"./ComposedChart-W6hZFmz1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dj-gYzEF.js";import{L as a}from"./Line-Ch-syxC5.js";import{X as c}from"./XAxis-B-oD2iVw.js";import{T as g}from"./Tooltip-lXADDqEF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BnHecJzQ.js";import"./CartesianAxis-B7Vv6p_O.js";import"./Layer-BzPfvU9G.js";import"./resolveDefaultProps-CaNslZFW.js";import"./Text-DgygHz8M.js";import"./DOMUtils-DIpMDOYS.js";import"./isWellBehavedNumber-fLv0mpTe.js";import"./Label-CfXLQ6Y8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CulQyNMA.js";import"./index-DOTsKUtA.js";import"./index-BHMOAiDy.js";import"./types-DcmHsPIr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsxFAPWV.js";import"./immer-DUM2qh_d.js";import"./RechartsWrapper-B3xTPXxL.js";import"./index-DVoRxuxV.js";import"./index-DYZmblhi.js";import"./axisSelectors-BiiECraK.js";import"./d3-scale-Cf8jgknj.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CARUth8A.js";import"./chartDataContext-CAO4RomS.js";import"./CategoricalChart-BUEeThvR.js";import"./tooltipContext-BvPc82zV.js";import"./AnimatedItems-iAWyiB5L.js";import"./useAnimationId-DCTLXFxw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CiHKZkj8.js";import"./ActiveShapeUtils-CAu9mK3S.js";import"./RegisterGraphicalItemId-Csp35HCn.js";import"./ErrorBarContext-DgP57VIM.js";import"./GraphicalItemClipPath-DtyJ7p0b.js";import"./SetGraphicalItem-DG3J4b0-.js";import"./getZIndexFromUnknown-BLeO88NZ.js";import"./graphicalItemSelectors-Dw25LUj4.js";import"./Curve-CBAt1y_u.js";import"./step-5LUllGte.js";import"./path-DyVhHtw_.js";import"./ActivePoints-f79orvlu.js";import"./Dot-D6jfHQrF.js";import"./getRadiusAndStrokeWidthFromDot-CP94W2K8.js";import"./useElementOffset-DPmIpr9N.js";import"./uniqBy-2U5GLGcS.js";import"./iteratee-CMRoo_5g.js";import"./Cross-BviN2Ees.js";import"./Sector-DBikrG1k.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
