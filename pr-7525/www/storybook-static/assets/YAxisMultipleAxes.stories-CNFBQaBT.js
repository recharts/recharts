import{R as t}from"./iframe-mx_m0Bbx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D0miqhdY.js";import{R as l}from"./zIndexSlice-DzRj0O2j.js";import{C as x}from"./ComposedChart-BENGvYsD.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BLrhuKRP.js";import{L as a}from"./Line-BegSPRqU.js";import{X as c}from"./XAxis-e2aIYDeC.js";import{T as g}from"./Tooltip-BgyVG5YZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-uqQC2EBI.js";import"./Layer-CIGRgmJf.js";import"./resolveDefaultProps-DbkTAdx2.js";import"./Text-BRqwcuo5.js";import"./DOMUtils-CxMZUWXo.js";import"./isWellBehavedNumber-DNgXwIS7.js";import"./Label-CTtz2nFH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DoWBLOas.js";import"./index-VyciUKje.js";import"./index-D6L8-6uP.js";import"./types-CGXKV1tr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dbw1NMhi.js";import"./throttle-C4NetDSi.js";import"./RechartsWrapper-BGo6HJcU.js";import"./index-DRxhjL8G.js";import"./index-DfXqfQfJ.js";import"./axisSelectors-BCNbmsqC.js";import"./d3-scale-Dkhn0JVn.js";import"./CartesianChart-CI1Yx8pO.js";import"./chartDataContext-DbyvTQIy.js";import"./CategoricalChart-CaTs9Dwm.js";import"./tooltipContext-DrwEEe3Q.js";import"./AnimatedItems-CxqbLrvD.js";import"./useAnimationId-B1RQqc1z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KZcqepmk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNcmVmA7.js";import"./RegisterGraphicalItemId-A-L91Q74.js";import"./ErrorBarContext-DRhFO-yz.js";import"./GraphicalItemClipPath-DdGvz8Ok.js";import"./SetGraphicalItem-_D-u02tv.js";import"./getZIndexFromUnknown-DFSjb3cp.js";import"./graphicalItemSelectors-CIKPVBBJ.js";import"./Curve-8KyVkyQb.js";import"./step-DzD8K2Hy.js";import"./path-DyVhHtw_.js";import"./ActivePoints-p8w8Ckwa.js";import"./Dot-CG3pFr9Q.js";import"./getRadiusAndStrokeWidthFromDot-e5MUZgSd.js";import"./useElementOffset-B1ENHzAZ.js";import"./uniqBy-CP0rnImt.js";import"./iteratee-Cu1e9zHo.js";import"./Cross-TN21c1kX.js";import"./Sector-D6oqAW5N.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
