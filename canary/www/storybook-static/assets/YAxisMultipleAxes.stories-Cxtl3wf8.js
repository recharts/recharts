import{R as t}from"./iframe-BSWUJvVD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CPNRWSYb.js";import{R as l}from"./zIndexSlice-Dodw6VBB.js";import{C as x}from"./ComposedChart-CU9OL2HY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CBa9TTQI.js";import{L as a}from"./Line-CjFCDQ2U.js";import{X as c}from"./XAxis-CjaWOmHo.js";import{T as g}from"./Tooltip-uFYXTgrh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Vl9hB9kE.js";import"./CartesianAxis-CVEh4tt_.js";import"./Layer-Cf5OzKEI.js";import"./resolveDefaultProps-BmihZEmA.js";import"./Text-AXOyatW-.js";import"./DOMUtils-BQwhIlov.js";import"./isWellBehavedNumber-BmaIQTH1.js";import"./Label-DXe68yB0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cq8G8FQO.js";import"./index-Dvw34fMT.js";import"./index-B3tdJtlF.js";import"./types-Dnz1a-tR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DqZNOnEy.js";import"./throttle-DttCRvoG.js";import"./RechartsWrapper-DTzsDh4q.js";import"./index-CvaVBha6.js";import"./index-C2hfqVYs.js";import"./axisSelectors-DyTmTh7D.js";import"./d3-scale-C12KvtOu.js";import"./CartesianChart-DPI5HXtq.js";import"./chartDataContext-DSlpgtsU.js";import"./CategoricalChart-DIaxl7pb.js";import"./tooltipContext-qkhEuIOD.js";import"./AnimatedItems-Z4j2jX_N.js";import"./useAnimationId-DQFk0Too.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BwGjqEA9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLmLa7pa.js";import"./RegisterGraphicalItemId-C0E0VwJr.js";import"./ErrorBarContext-CvQvhsxB.js";import"./GraphicalItemClipPath-BiLMWHLg.js";import"./SetGraphicalItem-DXqqCptu.js";import"./getZIndexFromUnknown-Cy7os2R0.js";import"./graphicalItemSelectors-CSHTXu_A.js";import"./Curve-DsJVJiVT.js";import"./step-n-r0mMGx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DxQISI2r.js";import"./Dot-B2jNwAb4.js";import"./getRadiusAndStrokeWidthFromDot-Bc40o6k6.js";import"./useElementOffset-CYaTUNRm.js";import"./uniqBy-BgH0Yxrn.js";import"./iteratee-Dfdp0kkr.js";import"./Cross-D8os7VLI.js";import"./Sector-k8eS64ue.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
