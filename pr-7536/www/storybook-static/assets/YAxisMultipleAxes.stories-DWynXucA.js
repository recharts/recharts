import{R as t}from"./iframe-GFu4u_Sr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DPkQctbd.js";import{R as l}from"./zIndexSlice-B5qFJFtI.js";import{C as x}from"./ComposedChart-aZQazbAt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BRYtNt63.js";import{L as a}from"./Line-DxAxJoY7.js";import{X as c}from"./XAxis-DCmYbaAb.js";import{T as g}from"./Tooltip-Cpol-hrR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BChvL9JZ.js";import"./Layer-rjKJbMCf.js";import"./resolveDefaultProps-B2kj8vGo.js";import"./Text-CHl4arA0.js";import"./DOMUtils-BV_Da9To.js";import"./isWellBehavedNumber-BzBjtwBe.js";import"./Label-DJGaBZN0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DO98mi6X.js";import"./index-J8ff_bgA.js";import"./index-BoT4UeUf.js";import"./types-CpBB06eN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dhv-F3Ii.js";import"./throttle-CQYhSY5q.js";import"./RechartsWrapper-GJPBo-3J.js";import"./index-fFvV_i1o.js";import"./index-CFslUPNA.js";import"./axisSelectors-CITTcs7P.js";import"./d3-scale-XJfpe2FZ.js";import"./CartesianChart-5jGrrHiW.js";import"./chartDataContext-ABcCQ5OY.js";import"./CategoricalChart-DaWqkQxP.js";import"./tooltipContext-2Jmu8Kxq.js";import"./AnimatedItems-BMr3q6ws.js";import"./useAnimationId-DHrR_uSV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEnsF74A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DrDRZtp1.js";import"./RegisterGraphicalItemId-C2TZCZTY.js";import"./ErrorBarContext-E48lOcW2.js";import"./GraphicalItemClipPath-Dp-oK_MY.js";import"./SetGraphicalItem-BWFxWlyV.js";import"./getZIndexFromUnknown-DTnGh4bz.js";import"./graphicalItemSelectors-B3NohPBl.js";import"./Curve-d1fxHJEK.js";import"./step-CJ2svyaN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BKnSZj52.js";import"./Dot-Cf60LmSz.js";import"./getRadiusAndStrokeWidthFromDot-CavQSINe.js";import"./useElementOffset-DBEFVHKJ.js";import"./uniqBy-eEvGEJfN.js";import"./iteratee-BruxsO2g.js";import"./Cross-hH2FjyBi.js";import"./Sector-E2MNApxp.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
