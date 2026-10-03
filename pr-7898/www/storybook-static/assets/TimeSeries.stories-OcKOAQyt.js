import{R as e}from"./iframe-DUCVYvuv.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BzNdpJxM.js";import{R as h}from"./zIndexSlice-Dv561aOb.js";import{C as g}from"./ComposedChart-NN_8ml7Y.js";import{L as x}from"./Line-CtdXCtTz.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CipezK5C.js";import{T as V}from"./Tooltip-BdFBoleX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CN04VyAD.js";import"./Layer-BYf2Lf2_.js";import"./resolveDefaultProps-DISImja8.js";import"./Text-BvxoaAi_.js";import"./DOMUtils-CzBz7LPB.js";import"./isWellBehavedNumber-CHfaFS22.js";import"./useId-B9VN3-ij.js";import"./useBackwardsCompatibleTheme-CPdPW8lT.js";import"./Label-BxNjUR8n.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CTDLevub.js";import"./index-Drz1YEgP.js";import"./index-BF0qlZzJ.js";import"./types-Bor8UPlE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DntZkvWg.js";import"./throttle-DlYjiwaM.js";import"./index-CU1FAq-q.js";import"./index-CF3yTXup.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-iyGA1AMM.js";import"./axisSelectors-RihwrwLn.js";import"./index-BB2mFlZ8.js";import"./CartesianChart-CMoCj0lC.js";import"./chartDataContext-C_0AmvZE.js";import"./CategoricalChart-BDtogWEQ.js";import"./Curve-BYkQNACV.js";import"./step-C8Z349xs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BEYVhKcg.js";import"./useAnimationId-CVoiYc0t.js";import"./ActivePoints-C4H58rGm.js";import"./Dot-BPs4QuN4.js";import"./RegisterGraphicalItemId-BxtMrAn2.js";import"./ErrorBarContext-DZk5Pr6Y.js";import"./GraphicalItemClipPath-AZa4GZWr.js";import"./SetGraphicalItem-CMStLvM8.js";import"./getRadiusAndStrokeWidthFromDot-BLrXq-Hf.js";import"./ActiveShapeUtils-Bh9qpD-D.js";import"./useGraphicalItemIdentity-BZb16S3a.js";import"./useElementOffset-BSSllVf1.js";import"./uniqBy-Xxc7DvXp.js";import"./iteratee-jOVAutlA.js";import"./Cross-Bgmo4ZsB.js";import"./Rectangle-CSIdxSg9.js";import"./util-Dxo8gN5i.js";import"./Sector-EwYINvkJ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
