import{R as t}from"./iframe-CZhceScU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DyokKs4q.js";import{R as l}from"./zIndexSlice-6KQyntdT.js";import{C as x}from"./ComposedChart-o3A5Ws01.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CaIXb91t.js";import{L as a}from"./Line-BVbkMHTj.js";import{X as c}from"./XAxis-o7n6bJ8R.js";import{T as g}from"./Tooltip-BAtEf983.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CNgEIlwK.js";import"./Text-CmIo03No.js";import"./resolveDefaultProps-DKz_FWjC.js";import"./DOMUtils-DbT53TZn.js";import"./isWellBehavedNumber-D-87yJTE.js";import"./useId-BZ6DWjsO.js";import"./useBackwardsCompatibleTheme-DNlLIhqX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wFB7jUG1.js";import"./index-CDuDfojR.js";import"./index-DpQK2wXv.js";import"./RechartsWrapper-FSanOK4G.js";import"./index-BEy16_lK.js";import"./index-Blwm4_kv.js";import"./throttle-4vdN6P2D.js";import"./axisSelectors-8JBi47Qo.js";import"./d3-scale-C7Vm1zun.js";import"./renderedTicksSlice-Cf3Ebwgh.js";import"./CartesianAxis-C3rrpirv.js";import"./Layer-Drn4JAex.js";import"./types-B4F0kvck.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-8qShj_eX.js";import"./chartDataContext-DJFrW4dv.js";import"./CategoricalChart-Cgj8wKUd.js";import"./AnimatedItems-DXBAxv9p.js";import"./useAnimationId-Cx8RIuDl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNqYqtsk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dk1tODGi.js";import"./tooltipContext-Dy-FNS8h.js";import"./RegisterGraphicalItemId-DnHmtku0.js";import"./ErrorBarContext-CS2ZLStC.js";import"./GraphicalItemClipPath-BzJCuoya.js";import"./SetGraphicalItem-DuTz6hix.js";import"./getZIndexFromUnknown-CLotRaH1.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DOfJK511.js";import"./Curve-FuimFyqA.js";import"./step-H2rxpHgP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B1Bif-Ou.js";import"./Dot-0p8__XhD.js";import"./getRadiusAndStrokeWidthFromDot-CVlp7Tat.js";import"./useElementOffset-CAePsNzR.js";import"./uniqBy-DimUAY1k.js";import"./iteratee-D_nrFtIa.js";import"./Cross-DSmOwhxO.js";import"./Sector-BBPVFVEm.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
