import{R as t}from"./iframe-BLwLvMjc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BeG492ya.js";import{R as l}from"./zIndexSlice-f39TItqz.js";import{C as x}from"./ComposedChart-CxKCgcGS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C5QEOUex.js";import{L as a}from"./Line-1bQ5HATy.js";import{X as c}from"./XAxis-ejI-Sa_I.js";import{T as g}from"./Tooltip-D2jjsH3C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BkG6HND6.js";import"./CartesianAxis-BaKeQioI.js";import"./Layer-Bt0_PYLT.js";import"./resolveDefaultProps-BYhifOb3.js";import"./Text-D72Dyp1P.js";import"./DOMUtils-BokrT3el.js";import"./isWellBehavedNumber-CptpHwFR.js";import"./Label-pioiAs6J.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-YEu_ZQSO.js";import"./index-CX4CypQp.js";import"./index-BMdMuoJa.js";import"./types-WD3PBzf9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqNNgNfR.js";import"./immer-D_8Dczsi.js";import"./RechartsWrapper-B0n9oFWZ.js";import"./index-940TGUxY.js";import"./index-C34Ey_Rg.js";import"./axisSelectors-D58BkBim.js";import"./d3-scale-DDplI62N.js";import"./CartesianChart-C4yu5ilR.js";import"./chartDataContext-B-M33Z7B.js";import"./CategoricalChart-CRVqHKQs.js";import"./tooltipContext-BwB3jdXU.js";import"./AnimatedItems-BZKtZoic.js";import"./useAnimationId-CqDdhCYT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wKNM39ge.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-peAesLaa.js";import"./RegisterGraphicalItemId-BnK-7IkL.js";import"./ErrorBarContext-DWoI7kQ6.js";import"./GraphicalItemClipPath-DiOFFyuB.js";import"./SetGraphicalItem-DSxSXGHZ.js";import"./getZIndexFromUnknown-CNC0JZgj.js";import"./graphicalItemSelectors-DoeQmq6z.js";import"./Curve-Bgoi8H0P.js";import"./step-Y_PLHiNv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpoXb-Tp.js";import"./Dot-DDBvFNxJ.js";import"./getRadiusAndStrokeWidthFromDot-BHSa5sI8.js";import"./useElementOffset-BL78dp6_.js";import"./uniqBy-Du5aieGd.js";import"./iteratee-Wx63tvk5.js";import"./Cross-315Cf3Tw.js";import"./Sector-CpXVAgg0.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
