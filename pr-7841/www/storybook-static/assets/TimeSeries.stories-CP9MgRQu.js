import{R as e}from"./iframe-BYch73GC.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DvBxon3R.js";import{R as h}from"./zIndexSlice-mAK65TxS.js";import{C as g}from"./ComposedChart-DaJB9Tix.js";import{L as x}from"./Line-rfnzjjTx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B2BH8dUM.js";import{T as V}from"./Tooltip-DdanCVHX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CWGo8wQX.js";import"./Layer-BCbhxOAa.js";import"./resolveDefaultProps-DWdkSMZg.js";import"./Text-C5jLRMCm.js";import"./DOMUtils-DGuhwttO.js";import"./isWellBehavedNumber-BP9XFgrX.js";import"./useId-BzCCYXNS.js";import"./useBackwardsCompatibleTheme-BIqSCxVj.js";import"./Label-BRuA27Hh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKmbkchN.js";import"./index-BeTLkY2H.js";import"./index-Bc_o9NJn.js";import"./types-CIbUV0Xf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BkcMIj-K.js";import"./throttle-BEoPPt7A.js";import"./index-BIGQU915.js";import"./index-Q_fYP1Tj.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BLQkthbe.js";import"./axisSelectors-B4VSjfJY.js";import"./index-D3IuKIwS.js";import"./CartesianChart-Cwhwr6-l.js";import"./chartDataContext-WIuoRrqx.js";import"./CategoricalChart-13njktaQ.js";import"./Curve-6yvIYj3p.js";import"./step-dz2nmhBH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D4BR2dBY.js";import"./useAnimationId-CPbSSa-W.js";import"./ActivePoints-Bxq6WSlq.js";import"./Dot-DSBm0u0z.js";import"./RegisterGraphicalItemId-C0FXSJZg.js";import"./ErrorBarContext-BZq9v9h8.js";import"./GraphicalItemClipPath-6dEZaUUD.js";import"./SetGraphicalItem-BJF1DUih.js";import"./getRadiusAndStrokeWidthFromDot-DlDYRf0f.js";import"./ActiveShapeUtils-p0MunX2r.js";import"./useGraphicalItemIdentity-_0Nc-geg.js";import"./useElementOffset-CXQ9oZOv.js";import"./uniqBy-Dk_A4srz.js";import"./iteratee-CLHchHka.js";import"./Cross-8uEJAeDC.js";import"./Rectangle-DpbOLOlD.js";import"./util-Dxo8gN5i.js";import"./Sector-B6m3GgAL.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
