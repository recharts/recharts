import{R as e}from"./iframe-B5g3I7ev.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BhxgbA2b.js";import{R as h}from"./zIndexSlice-DGvgy2X6.js";import{C as g}from"./ComposedChart-CF6CWDO9.js";import{L as x}from"./Line-CzGLEasr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C7u8uwmP.js";import{T as V}from"./Tooltip-CHIKe2CP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CufURV0j.js";import"./Layer-BzSrPOIw.js";import"./resolveDefaultProps-CNWhfhMM.js";import"./Text-BYK6re_u.js";import"./DOMUtils-BBurC4Bd.js";import"./isWellBehavedNumber-C-qAxBmX.js";import"./useId-BeJfkheV.js";import"./useBackwardsCompatibleTheme-BDfv2Eej.js";import"./Label-T3V6prm0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C61b4tvj.js";import"./index-CUp993cz.js";import"./index-BAWIKs3X.js";import"./types-4J1YdzxR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BmUG22gY.js";import"./throttle-DboQbEZw.js";import"./index-Z4LdU3de.js";import"./index-wrz3e8tU.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Bo6Jfh5F.js";import"./axisSelectors-DjPo8MIe.js";import"./index-DQOAurO-.js";import"./CartesianChart-CCYXF9ai.js";import"./chartDataContext-DiPBxGan.js";import"./CategoricalChart-BprHnfNJ.js";import"./Curve-CnFbZ5iA.js";import"./step-CCbudcDx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAgU6T0J.js";import"./useAnimationId-E9ax1yjD.js";import"./ActivePoints-DonB9ZTw.js";import"./Dot-DrD1foSY.js";import"./RegisterGraphicalItemId-B0kmn4VH.js";import"./ErrorBarContext-CUA3MPdo.js";import"./GraphicalItemClipPath-C2l89xTF.js";import"./SetGraphicalItem-B2TqdHsC.js";import"./getRadiusAndStrokeWidthFromDot-lubS4zqJ.js";import"./ActiveShapeUtils-BHMUVdMS.js";import"./useGraphicalItemIdentity-DeD0kRsv.js";import"./useElementOffset-9_pOD8zc.js";import"./uniqBy-3ryMdrvw.js";import"./iteratee-D8S9d83o.js";import"./Cross-9hgsawqu.js";import"./Rectangle-BtmGpz6E.js";import"./util-Dxo8gN5i.js";import"./Sector-4FsQvLtK.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
