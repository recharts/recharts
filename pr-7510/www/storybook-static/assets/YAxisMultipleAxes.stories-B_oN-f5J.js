import{R as t}from"./iframe-DCxLvNga.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BqxXsg45.js";import{R as l}from"./zIndexSlice-DgwgOA8W.js";import{C as x}from"./ComposedChart-BhW0iq0n.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BNbtkdOd.js";import{L as a}from"./Line-BL__EnOs.js";import{X as c}from"./XAxis-CvAM-btA.js";import{T as g}from"./Tooltip-BDzvXn_9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cqaz2t92.js";import"./CartesianAxis-D6yEppZ-.js";import"./Layer-wgUOVjl0.js";import"./resolveDefaultProps-Clp0Py5Q.js";import"./Text-CxvVezqe.js";import"./DOMUtils-CJlLdKU3.js";import"./isWellBehavedNumber-C0c3JW0z.js";import"./Label-B5b7aLp5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CM9bDnHX.js";import"./index-8Ky9zJpe.js";import"./index-eUk0KR26.js";import"./types-CVkN-t8Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-PHCHKu5h.js";import"./throttle-BEPLbkDl.js";import"./RechartsWrapper-DQRomY3U.js";import"./index-WumRa2O_.js";import"./index-HEbudI5N.js";import"./axisSelectors-LD-bHnG0.js";import"./d3-scale-U7zf4vxG.js";import"./CartesianChart-WbtSIkDa.js";import"./chartDataContext-1-JtWOIC.js";import"./CategoricalChart-BL0VhkFE.js";import"./tooltipContext-HxNXNBwa.js";import"./AnimatedItems-kb_X2dzq.js";import"./useAnimationId-HOEbSJwy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-TQcaGvcZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-j_zEDQtR.js";import"./RegisterGraphicalItemId-uoD-MQmf.js";import"./ErrorBarContext-BqmhDiAL.js";import"./GraphicalItemClipPath-CWBeJB2a.js";import"./SetGraphicalItem-Cst8NOmH.js";import"./getZIndexFromUnknown-DphAGuTV.js";import"./graphicalItemSelectors-z9URsQXH.js";import"./Curve-BhRVcMAR.js";import"./step-x_BcDJPY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BUWG0sGV.js";import"./Dot-D-XUpmdF.js";import"./getRadiusAndStrokeWidthFromDot-6CNdFBKE.js";import"./useElementOffset-AXra7XvW.js";import"./uniqBy-C8S0yzEw.js";import"./iteratee-XGgbb57g.js";import"./Cross-C2VI1nHf.js";import"./Sector-C4RdNObv.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
